import {StyleSheet} from 'react-native';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("screen").height;

const primaryBoxShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 1.8,
  shadowRadius: 3, 
}

const SecondaryBoxShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 0.4, 
}

export const  styles = StyleSheet.create({
  greetingContainer:{
    marginTop:20,
  },
  menuIcon:{
    height:30,
    width:30,
    resizeMode:"cover",
    marginLeft:10,
    color:"gray"
  },
  dashboard : {
    backgroundColor:"#F5F6FA",
    marginTop:"12%",
    height:"100%"
  },
  dashboardContainer:{
  flex:4,    
  marginTop:12
  },
  dashboardColumn1:{
    flexDirection:"row",
    flex:2,
    width:screenWidth-10
  },
  dashboardColumn:{
    flex:4,
    flexDirection:"row",
    height:"auto"
  },
  cardComponent:{
    borderColor:"gray",
    borderRadius:20,
    margin:10,
    padding:20,
    backgroundColor:"white",
    width:screenWidth-20
  },
  cardTitle:{
    fontSize:25,
    fontWeight:"600",
  },
  FirstComp:{
    marginTop:12,
    flexDirection:"row",
    verticalAlign:"middle",
    alignContent:"center",
    padding:5,
  },
  FirstValue:{
    color:"#22C665",
    fontSize:40,
    fontWeight:"300",
    marginRight:5
  },
  FirstTitle:{
    fontSize:15,
    marginLeft:12,
    marginTop:6
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nav:{
        flex: 1,
      backgroundColor: '#00000',
      border:"solid 1px black",
      position:"fixed",
      bottom:"0%",
      color:"blue"
    },
    title:{
      fontWeight:"700",
      fontSize:24,
      marginLeft:15,
      marginTop:30,
      color:"gray"
    },
    stepsImage:{
      marginTop:-20,
      width:80,
      height:80,
      marginLeft:2,
      resizeMode:'stretch'
    },
    stepCounter:{
      flexDirection:"row",
      width:260
    },
    stepSeperator:{
      fontSize:30,
      marginTop:8,
      color:"#FF5C65",
      marginRight:5
    },
    stepTarget:{
      fontSize:30,
      color:"#FCE102",
      marginTop:24
    },
    secondComp:{
      flexDirection:"row",
      marginTop:20,
    },
    secondValue:{
      fontSize:20,
      color:"#FC5B28"
    },
    secondTitle:{
      marginTop:5,
      marginLeft:6,
      marginRight:20
    }
  });

export const medicineCard = StyleSheet.create({
  cardTitle:{
    fontSize:25,
    fontWeight:"600",
    marginTop:10,
    marginLeft:10
  },
  medicineContainer:{
    width:screenWidth
  },
  cardComponent:{
    borderColor:"gray",
    borderRadius:20,
    margin:10,
    padding:5,
    backgroundColor:"white",
    width:screenWidth-20
  },
  drugImage:{
    width:20,
    height:20,
    resizeMode:"stretch",
    marginLeft:8,
    marginTop:15
  },
  timeLine:{
  marginRight:25,
  marginTop:20,
  marginBottom:25
  },
  timeLineContainer:{
    marginLeft:10
  },
  time:{
    fontSize:16,
    fontWeight:"600"
  },
  medicineRemainder:{
    flexDirection:"row",
    // backgroundColor:"rgba(194,239,223,0.3)",
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    padding:10,
    marginTop:12,
    borderColor:"gray"
  },
  instructions:{
    fontSize:15,
    fontWeight:"600",
  },
  text:{
    marginTop:10,
    color:"#22C3E6",
    fontWeight:"800"
  },
  timings:{
    marginTop:10,
    marginBottom:-3,
    fontSize:10,
  }
})

export const fileCard = StyleSheet.create({
  cardComponent:{
    flex:2,
    backgroundColor:"white",
    padding:12,
    margin:10,
    width:175,
    borderRadius:20
  },
  cardTitle:{
    fontSize:20,
    fontWeight:"600",
    marginBottom:12,
    marginLeft:18
  },
  total:{
    fontSize:50,
    fontWeight:"600",
    verticalAlign:"middle",
    alignItems:"center",
    marginLeft:50,
    color:"#FF5C65"
  }
})

export const backBtn = StyleSheet.create({
  container:{
    alignItems:"center",
    marginLeft:20,
    borderWidth:0.5,
    width:35,
    height:35,
    borderRadius:10,
    shadowColor: SecondaryBoxShadow.shadowColor,
    shadowOffset: SecondaryBoxShadow.shadowOffset,
    shadowOpacity: SecondaryBoxShadow.shadowOpacity,
    shadowRadius: SecondaryBoxShadow.shadowRadius, 
  },
  icon:{
    height:20,
    width:20,
    alignItems:"center",
    resizeMode:"cover",
    marginLeft:-3,
    marginTop:6,
    color:"gray"
  }
})

export const reportManager = StyleSheet.create({
  container:{
    marginTop:50
  },
  uploadContainer:{
    position:"absolute",
    right:30,
    top:screenHeight - 140,
    backgroundColor:"#3AB141",
    width:65,
    borderRadius:50,
    shadowColor: SecondaryBoxShadow.shadowColor,
    shadowOffset: SecondaryBoxShadow.shadowOffset,
    shadowOpacity: SecondaryBoxShadow.shadowOpacity,
    shadowRadius: SecondaryBoxShadow.shadowRadius,
    height:65
  },
uploadIcon:{
  width:35,
  marginLeft:15,
  height:35,
  resizeMode:"contain",
  marginTop:15
}
})

export const signUp = StyleSheet.create({
 container:{
  flex:1,
  height:"100%"
 },
 backgroundImage:{
  flex: 1,
  justifyContent: 'center',
},
 signUpBox:{
  flex: 0.5,
  justifyContent: 'space-evenly',
  position:"absolute",
  bottom:0,
  left:0,
  width:"100%",
  height:"60%",
  backgroundColor:"#F2F3F5",
  borderRadius:20,
  shadowColor: primaryBoxShadow.shadowColor,
  shadowOffset: primaryBoxShadow.shadowOffset,
  shadowOpacity: primaryBoxShadow.shadowOpacity,
  shadowRadius: primaryBoxShadow.shadowRadius, 
 },
 textcontainer:{
  margin:30,
 },
 label:{
  marginBottom:10,
  marginTop:10,
  fontWeight:'500',
  fontSize:15,
  color:"#c4c4c4"
 },
 titleContainer:{
  alignItems:'center',
  marginTop:-70
 },
 title:{
  fontSize:40,
  marginTop:90,
  fontWeight:"600",
 },
 buttoncontainer:{
  alignItems:'center',
  margin:30
 },
 createAccount:{
  flexDirection:'row',
  flex:2,
  marginTop:-30,
  marginLeft:30,
 },
 createAccountText:{
  marginBottom:10,
  marginTop:10,
  fontWeight:'400',
  fontSize:15,
  color:"#F57E5D"
 }
})

export const textInputs = StyleSheet.create({
  primarytextBox:{
    width:"100%",
    borderColor:"#c4c4c4",
    padding:12,
    color:"#22C665",
    borderWidth:1,
    borderRadius:5,
  },
  primarytextBoxInFocus:{
    width:"100%",
    borderColor:"#22C665",
    padding:12,
    color:"#22C665",
    borderWidth:2,
    borderRadius:5,
  }
 })

export const buttons = StyleSheet.create({
  primaryBtn:{
    width:"40%",
    padding:12,
    backgroundColor:"#22C665",
    borderWidth:0.8,
    borderRadius:5,
    alignItems:'center',
    shadowColor: SecondaryBoxShadow.shadowColor,
    shadowOffset: SecondaryBoxShadow.shadowOffset,
    shadowOpacity: SecondaryBoxShadow.shadowOpacity,
    shadowRadius: SecondaryBoxShadow.shadowRadius, 
  },
  primaryBtnText:{
    fontSize:16,
    fontWeight:"500",
  }
 })

export const sidebar = StyleSheet.create({
  container:{
    flex:1,
    height:screenHeight,
    backgroundColor:"white",
    width:"50%",
    position:"absolute",
    zIndex:9,
    borderColor:"gray",
    shadowColor: SecondaryBoxShadow.shadowColor,
  shadowOffset: SecondaryBoxShadow.shadowOffset,
  shadowOpacity: SecondaryBoxShadow.shadowOpacity,
  shadowRadius: SecondaryBoxShadow.shadowRadius, 
    
  }
})
  