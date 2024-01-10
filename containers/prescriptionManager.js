import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../static/styles';



export default function PrescriptionManager(){
    const navigation = useNavigation();

    return(
        <>
        <View style = {styles.container}>
            <Text>Prescription Manager</Text>
            <Button title='Back' onPress={()=>{navigation.goBack()}}></Button>
        </View>

        </>
    )

    
}

  
