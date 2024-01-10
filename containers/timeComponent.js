import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { medicineCard } from '../static/styles';
import drugIcon from "../assets/icons/drugs.png";
import noneIcon from "../assets/icons/none.png";


export default function TimeComponent(props){
    const {hour} = props;
    const [hourVal,setHourVal] = useState('');
    const [none,setNone] = useState(false);
    useEffect(() => {
        let ran  = Math.round(Math.random());
        if(ran === 0){
            setNone(true);
        }
        if(hour > 12){
            setHourVal(hour - 12 + "" + 'PM')
        }
        else{
            setHourVal(hour + "" +'AM')
        }
      }, [hour]);
      
    return(
        <>
            <View style = {medicineCard.timeLine}>
                <Text style = {medicineCard.time}>{hourVal}</Text>
                <Image source = {none === true? drugIcon:noneIcon}  style ={medicineCard.drugImage}/>
            </View>
        </>
    )

    
}

  
