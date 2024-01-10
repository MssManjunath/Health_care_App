import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import {styles,medicineCard,fileCard} from '../static/styles';
import TimeComponent from './timeComponent';
import clock1 from "../assets/icons/clock1.png"



export default function CardReport(props){
    const {name,value} = props;
    return(
        <>
        <View style = {fileCard.cardComponent} horizontal={true} showsVerticalScrollIndicator={false} >
            <Text style = {fileCard.cardTitle}>{name}</Text>
            <View >
                <Text style = {fileCard.total}>{value}</Text>
            </View>
        </View>
        </>
    )  
}

  
