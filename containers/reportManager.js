import React,{useState} from 'react'
import { View,Image,Button,Pressable,showTopToast} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { reportManager } from '../static/styles';
import {Back} from "./actionContainer";
import * as DocumentPicker from 'expo-document-picker';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import uploadIcon from "../assets/icons/uploadIcon.png";
import * as FileSystem from 'expo-file-system';

export default function ReportManager(){
   const navigation = useNavigation();
   const {userData} =  useSelector(state =>state.user);
   console.log("UserData",userData);

   const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({copyToCacheDirectory:false});

    if (!result.cancelled) {
      const assets = result.assets;
      const file = assets[0];
      try {
        const normalizedFile = { ...file };
        const formData = new FormData();
        formData.append('file', {
          uri: normalizedFile.uri,
          type: normalizedFile.mimeType,
          name: normalizedFile.name,
        });
        formData.append('userId',userData?._id);
        axios.post('http://10.0.0.215:8080/file/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };


const  upload = async () => {

} 

    return(
        <>
        <View style = {reportManager.container}>
            <Back navigation = {navigation}/>
            <View>

            </View>
            <View>

            </View>
              <Pressable style = {reportManager.uploadContainer} onPress={() =>{pickDocument()}}>
                <Image source={uploadIcon} style = {reportManager.uploadIcon}/>
              </Pressable>
            </View>
        </>
    )

    
}

  
