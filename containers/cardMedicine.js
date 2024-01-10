import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import {styles,medicineCard} from '../static/styles';
import TimeComponent from './timeComponent';
import clock1 from "../assets/icons/clock1.png"



export default function CardMedicine(props){
    const [timeArray,setTimeArray] = useState([]);
    var d = new Date(); 
    useEffect(() => {
        let temp = []
        for(var i = 0; i<12 ;i++){
            if(d.getHours() + i <=24){
                temp.push(d.getHours() + i)
            }
            else{
                temp.push((d.getHours()+ i) - 24)
            }
            setTimeArray(temp);

        }
      }, [d.getHours()]);
    return(
        <>
        <View style = {medicineCard.cardComponent} horizontal={true} showsVerticalScrollIndicator={false} >
            <Text style = {medicineCard.cardTitle}>Your Medications</Text>
            <ScrollView horizontal = {true} style= {medicineCard.timeLineContainer}>
                {timeArray.map(hours =>(
                    <TimeComponent hour = {hours} />
                ))}
            </ScrollView>
            {/* <View style = {medicineCard.medicineRemainder}>
                <View>
                    <Text style = {medicineCard.instructions}>Total Medicines</Text>
                    <Text style = {medicineCard.text}>Most Used</Text>
                    <Text style = {medicineCard.timings}>
                        Next in another 20mins
                    </Text>
                </View>
                <View>
                <Image source={clock1} style = {medicineCard.drugImage} />
                </View>
            </View> */}
        </View>
        </>
    )  
}

  
