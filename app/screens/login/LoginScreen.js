import React, { useState } from 'react';
import { Formik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';
import { Image,StyleSheet,View,Text,ImageBackground} from "react-native";
import InputSharedScreen from '../shared/InputSharedScreen'

function LoginScreen(props) {
  let InputSharedScreenProperties=
  [
  {keyboardType:'email-address',
  placeholder:'Email',
  textContentType:'emailAddress',},
  {placeholder:'Password',secureTextEntry:true,
  textContentType:'password'}
]
const [email,setEmail]=useState();
const [password,setPassword]=useState()
  return (
 <View style={styles.ParentContainer}>
 
 <LinearGradient
  colors={['#7F77FE', '#A573FF']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.linearGradient}
      >
        <ImageBackground
          source={require('../../assets/upperdiv.png')}
          style={styles.imageBackground}
        >
<View style={{width:'85%',marginLeft:'7.5%',marginTop:50}}>
<Image style={styles.upperImage} source={require('../../assets/whitearrow.png')}/>
</View>
<View style={{display:'flex',flexDirection:'column',width:'85%',marginLeft:'7.5%',gap:20}}>
  <Text style={{fontSize:24,color:'#fff',fontStyle:'normal',fontWeight:900,lineHeight:24}}>Welcome Back!</Text>
  <Text style={{fontStyle:'normal',fontSize:14,fontWeight:700,lineHeight:20,color:'#fff',maxWidth:295,}}>Yay! You're back! Thanks for shopping with us.
We have excited deals and promotions going on, grab your pick now! </Text>
<Text style={{marginTop:70,fontSize:18,color:'#fff',fontWeight:900,lineHeight:24,fontStyle:'normal'}}>LOGIN</Text>

</View>
        </ImageBackground>
      </LinearGradient>
<View style={{width:'85%',marginLeft:'7.5%',marginRight:'7.5%',marginTop:30}}>
  <Formik
  style={{width:'100%'}}
  initialValues={{email:'',password:''}}
  onSubmit={values=>console.log(values)}
  
  >
{
  ({handleChange,handleSubmit})=>
  (
    <>
    <InputSharedScreen InputSharedScreenProperties={InputSharedScreenProperties}/>
    </>
  )
}
  </Formik>

</View>
      

 </View>
  );
}

const styles = StyleSheet.create({
  ParentContainer:{
    flex:1,
display:'flex',
flexDirection:'column',
alignItems:'flex-start'
  },
  linearGradient:{

  },
  imageBackground:{
    width:'100%',
    height:380,
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    gap:60
  },
  upperImage:{
    width:20,
   height:17
  }
  
})

export default LoginScreen;