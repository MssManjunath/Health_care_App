import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Icon } from 'react-native-elements'
import {styles} from '../static/styles';
import {ProgressCharts} from "./charts";
import walking from "../assets/icons/walking.png"



export default function DashboardCard(props){
    const [width,setWidth] = useState(0);
    const {name,currentStepCount,pastStepCount} = props;
    function getWidth(layout){
        const {x, y, width, height} = layout;
        setWidth(width);
    }
    useEffect(() =>{
        console.log(currentStepCount);
    },[currentStepCount])
    return(
        <>
        <View style = {styles.cardComponent} onLayout={(event) => {getWidth(event.nativeEvent.layout)}}>
            <Text style = {styles.cardTitle}>{name}</Text>
            
            <View style = {styles.FirstComp}>
                <View style = {styles.stepCounter}>
                    <Text style = {styles.FirstValue}>{currentStepCount}</Text>
                    <Text style = {styles.stepSeperator}>/</Text>
                    <Text style = {styles.stepTarget}>1000</Text>
                </View>
                <View style = {styles.stepsImage}>
                    <Image source={walking} width={20} height={20} style={styles.stepsImage}></Image>
                </View>    
            </View>
            <View style = {styles.secondComp}>
                    <Text style = {styles.secondValue}>{(currentStepCount * 0.0008).toFixed(3)}</Text>
                    <Text style = {styles.secondTitle}>km</Text>
                    <Text style = {styles.secondValue}>5.8</Text>
                    <Text style = {styles.secondTitle}>inches</Text>
                    <Text style = {styles.secondValue}>66</Text>
                    <Text style = {styles.secondTitle}>kg</Text>
                </View>
        </View>
        </>
    )  
}

  
