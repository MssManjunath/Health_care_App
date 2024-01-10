import React,{useState} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Icon } from 'react-native-elements'


export default function Nav(){
    const [value, setValue] = React.useState(0);
    return(
        <>
        <View style = {styles.nav}>
        <Icon
        style = {styles.tinyLogo}
            name='heartbeat'
            type='font-awesome'
            color='#f50'
/>
      <Icon
  style = {styles.tinyLogo}
  name='g-translate'
  color='#00aced' />

<Icon
style = {styles.tinyLogo}
  name='home'
  type='Octicons'
  color='#000000'
/>

<Icon
style = {styles.tinyLogo}
  name='access-alarm'
/>
        </View>
        </>
    )

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#00000",
      alignItems: 'right',
      justifyContent: 'center',
    },
    nav:{
      backgroundColor:"white",
      borderCurve:20,
      borderColor:"gray",
      borderRadius:5,  
      borderWidth:1,
      alignItems: 'center',
      justifyContent:'center',
      position:"absolute",
      bottom:"0%",
      width: '100%',
      display:'flex',
      flexDirection: 'row',
    },
    text:{
      color:"black",
    },
    tinyLogo:{
      padding:15,
      marginLeft:12,
      marginRight:22
      
    }
  });
  
