import React,{useEffect, useState} from 'react'
import {ImageBackground, Text, View,TextInput,Pressable,KeyboardAvoidingView,Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { buttons, signUp,textInputs } from '../static/styles';
import background1 from "../assets/images/tab-1.jpg";
import background2 from "../assets/images/jog-2.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { userSignup ,loginUser} from '../redux/actions/loginAction';
import { useNavigation } from '@react-navigation/native';

export default function SignUp(props){
    const {isLogin} = props;
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [focus,setFocus] = useState('');
    const {userData} =  useSelector(state =>state.user);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(()=>{
        if(userData?.validate && userData?.validate === false){
            alert("Invalid username and Password");
        }
        if(userData?._id){
            navigation.push('Dashboard');
        }
    },[userData])
    
    const onSubmit = () => {
        if(username === '' ||  email === '' || password===''){
          alert('Fields cannot be null');
        }
        else{
          dispatch(userSignup(username,email,password));
        }
      }

    const onLogin = () =>{
        console.log("Reachedddd")
        if(email === '' || password===''){
            alert('Fields cannot be null');
        }
        else{
            dispatch(loginUser(email,password));
        }
    }

    return(
        <KeyboardAvoidingView 
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style = {signUp.container}>
        <ImageBackground  source={isLogin?background1:background2} resizeMode="cover"  style = {signUp.backgroundImage} blurRadius={3}>
            <View style = {signUp.signUpBox}>
                <View style = {signUp.titleContainer}>
                <Text style = {signUp.title}>{isLogin?"Login":"Sign Up"}</Text>
                </View>
                <View style = {signUp.textcontainer}>
                    {!isLogin && (
                        <>
                <Text style = {signUp.label}>UserName</Text>
                <TextInput style = {focus === 'userName'? textInputs.primarytextBoxInFocus :textInputs.primarytextBox} value={username} onFocus={()=>{setFocus('userName')}} onBlur={()=>{setFocus('')}} onChangeText={(text)=>{setUsername(text)}}/>
                </>
                    )}
                <Text style = {signUp.label}>Email</Text>
                <TextInput style = {focus === 'email'? textInputs.primarytextBoxInFocus :textInputs.primarytextBox} value={email} onFocus={()=>{setFocus('email')}} onBlur={()=>{setFocus('')}} onChangeText={(text)=>{setEmail(text)}}/>
                <Text style = {signUp.label}>Password</Text>
                <TextInput secureTextEntry={true} style = {focus === 'password'? textInputs.primarytextBoxInFocus :textInputs.primarytextBox} value={password} onFocus={()=>{setFocus('password')}} onBlur={ ()=>{setFocus('')}} onChangeText={(text)=>{setPassword(text)}}/>
                <View style = {signUp.buttoncontainer}>
                <Pressable style={buttons.primaryBtn} onPress={()=>{isLogin?onLogin():onSubmit()}}>
                <Text style ={buttons.primaryBtnText}>{isLogin?"Login":"Sign Up"}</Text>
                </Pressable>
                </View>
                </View>
                <View style = {signUp.createAccount}>
                <Text style = {signUp.createAccountText}>{isLogin?"Create a Account?":"Have an Account ?"}</Text>
                <Button style = {signUp.createAccountText} title='Click Here' onPress={()=>navigation.push(isLogin?"SignUp":"Login")}></Button>
                </View>
            </View>
        </ImageBackground>
        </KeyboardAvoidingView>

    )

    
}

  
