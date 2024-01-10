import Nav from './containers/nav';
import Home from "./containers/home";
import Dashboard from "./containers/dashboard"
import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pedometer } from 'expo-sensors';
import ReportManager from './containers/reportManager';
import SignUp from "./containers/signUp";
import PrescriptionManager from './containers/prescriptionManager';
import {Provider} from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator();

function App() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
  }, []);

  return (
     <Provider store = {store}>
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{ headerShown: false }} initialRouteName='Login'>
            <Stack.Screen name="Login">
          {() =><SignUp isLogin = {true} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {() =><SignUp isLogin = {false} />}
        </Stack.Screen>
        <Stack.Screen name="Dashboard">
          {() =><Dashboard currentStepCount = {currentStepCount} pastStepCount = {pastStepCount} />}
        </Stack.Screen>
        <Stack.Screen name="ReportManager">
          {() =><ReportManager/>}
        </Stack.Screen>
        <Stack.Screen name="PrescriptionManager">
          {() =><PrescriptionManager/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    {/* <Nav/> */}
    </Provider>
  );
}

export default App;