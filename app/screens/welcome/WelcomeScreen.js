import React from 'react';

import { Image, ImageBackground,StyleSheet,View,Text,TouchableOpacity} from "react-native";

const WelcomeScreen= ({ navigation }) => {
  return (
    <ImageBackground 
    style={
      styles.background
    }
    source={require('../../assets/homebackground.png')}>
      <Image style={styles.upperImage} source={require('../../assets/topcurve.png')}/>
      <Text style={
        styles.HeadText
      }>Geeta.</Text>
      <View style={styles.parentHolder}>

      <View style={styles.container}>
        <View style={{
          display:'flex',
          justifyContent:'center',
          width:'100%',
          alignItems:'center'
        }}>
           <Text style={
       {
        textAlign:'center',
        fontSize:24,
        maxWidth:230,
        fontWeight:900,
        lineHeight:24
      
        
       }
        }>Create your fashion 
 in your own way</Text>
        </View>
        <View style={{
          display:'flex',
          justifyContent:'center',
          width:'100%',
          alignItems:'center',
          
        }}>
        <Text style={
       {
        textAlign:'center',
        fontSize:14,
        maxWidth:280,
        fontWeight:700,
        lineHeight:20
        
       }
        }>
        Each men and women has their own style, Geeta help you to create your unique style. 

        </Text>
        </View>
       

      </View>
      <View style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:16
      }}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
    <View style={{width:200,height:55,backgroundColor:'#FFF',display:'flex',justifyContent:'center',borderRadius:56,borderStyle:'solid',borderColor:'#000',borderWidth:1}}
 
   
    >
   <Text style={{textAlign:'center',color:'#000',fontSize:11,fontWeight:900}}> LOGIN</Text>
    </View>
    </TouchableOpacity>
   
    <View style={{
      width:'80%',
      marginLeft:'10%',
      marginRight:'10%',
      display:'flex',
      alignItems:'center',
      position:'relative'
    }}>
      <View style={{
        width:'40%',
        height:2,
        backgroundColor:'#D2D2D2',
        zIndex:1
      }}></View>
      <View style={{
        width:40,
        height:30,
        backgroundColor:'#FFF',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:-12,
        zIndex:9999
      }}>
<Text style={{
  fontSize:14
}}>OR</Text>
      </View>
    </View>
    <View style={{width:200,height:55,backgroundColor:'#6342E8',display:'flex',justifyContent:'center',borderRadius:56,marginTop:5,}}>
   <Text style={{textAlign:'center',color:'#fff',fontSize:11,fontWeight:900}}>REGISTER</Text>
    </View>
      </View>

      </View>
      <Image style={styles.downwardImage} source={require('../../assets/bottomcurve.png')}/>
    </ImageBackground>
  )
  
};

const styles = StyleSheet.create({
  background:{
   
    flex:1,
    position:'relative'

  },
  parentHolder:{
    flex:1,
    display:'flex',
    justifyContent:'flex-start',
    fontStyle:'normal',
    gap:60

    
  },
  HeadText:{
    textAlign:'center',
    color:'#000',
    marginTop:80,
    fontSize:50
  },
  container:{
    display:'flex',
    flexDirection:'column',
    marginTop:100,
   width:'85%',
   marginLeft:'7.5%',
   marginRight:'7.5%',
   gap:30
  },
  upperImage:{
    position:'absolute',
    top:0,
    left:0,
    width:150,
    height:150,
   
  },
  downwardImage:{
    position:'absolute',
    bottom:0,
    right:0,
    width:200,
    height:230
  }
  
})
export default WelcomeScreen;



