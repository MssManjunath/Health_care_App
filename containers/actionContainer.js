import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import { Icon } from 'react-native-elements'
import { backBtn } from '../static/styles';
import backButton from "../assets/icons/back.png";


const Back = (props) =>{
    const {navigation} = props;
    return(
        <Pressable onPress={()=>{navigation.goBack()}} style = {backBtn.container} >
            <Image source = {backButton} style = {backBtn.icon} ></Image>
        </Pressable>
    ) 
}
module.exports = {Back}

  
