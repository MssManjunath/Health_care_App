import React,{useState} from 'react'
import {styles,sidebar} from '../static/styles';
import { StyleSheet, Text, View,Image,  ScrollView, Touchable, Pressable,
} from 'react-native'
import { Icon } from 'react-native-elements'
import DashboardCard from './stepCard';
import CardMedicine from "./cardMedicine";
import CardReport from "./cardReports";
import { useDispatch, useSelector } from 'react-redux';
import {ProgressCharts} from "./charts";
import { useNavigation } from '@react-navigation/native';
import menuIcon from "../assets/icons/menus.png";
import SideBar from "./sideBar";

export default function Dashboard(props){
    const {currentStepCount,pastStepCount} = props;
    const [value, setValue] = React.useState(0);
    const navigation = useNavigation();
    const {userData} =  useSelector(state =>state.user);
    console.log("userrrrrrrrr Data",userData)
    return(
        <>
        <ScrollView style = {styles.dashboard}>
            {/* <View style = {sidebar.container}>
                <SideBar/>
            </View> */}
            <View style = {styles.greetingContainer}>
            <Image source={menuIcon} style = {styles.menuIcon}/>
                <Text style = {styles.title}>
                    Hi, {userData?.userName}
                </Text>
                <Text style = {styles.title}>
                Your Dashboard
                </Text>
            </View>
            <View style = {styles.dashboardContainer}>
                    <View style = {styles.dashboardColumn1}>
                        <DashboardCard name = {"Steps"} currentStepCount = {currentStepCount} pastStepCount = {pastStepCount} />
                    </View>
                    <View style = {styles.medicineContainer}>
                        <CardMedicine/>
                    </View>
                    <View style = {styles.dashboardColumn}>
                    <Pressable onPress={() =>{navigation.push("ReportManager")}}>
                    <CardReport name = "Reports"  value = "4"/>
                    </Pressable>
                    <Pressable onPress={() =>{navigation.push("ReportManager")}}>
                    <CardReport  name = "Prescriptions" value = "20"/>
                    </Pressable>
                    </View>
            </View>
        </ScrollView>
        </>
    )

    
}



  
