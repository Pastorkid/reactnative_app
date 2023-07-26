import React from 'react';
import {TextInput, View,StyleSheet,Text,Image} from 'react-native';

function InputSharedScreen(props) {
  return (
    <>
   <View style={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%',marginBottom:23,gap:10}}>
    <Text style={{fontSize:14,fontWeight:900}}>Email address </Text>
   <View style={styles.InputDiv}>
   <Image style={{height:20,width:20,marginLeft:10}} source={require('../../assets/envelop.png')}/>
    <TextInput
  style={{width:'90%',color:'#303030'}}
    autoCapitalize='none'
    autoCorrect={false}
    keyboardType={props.InputSharedScreenProperties[0].keyboardType}
    placeholder={props.InputSharedScreenProperties[0].placeholder}
    textContentType={props.InputSharedScreenProperties[0].textContentType}

    />
    </View>
   </View>
   <View style={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%',gap:10}}>
   <Text style={{fontSize:14,fontWeight:900}}>Password</Text>
 <View style={styles.InputDiv}>
 <Image style={{height:20,width:20,marginLeft:10}} source={require('../../assets/Lock.png')}/>
 <TextInput 
 style={{width:'90%',color:'#303030'}}
    autoCapitalize='none'
    autoCorrect={false}
   placeholder={props.InputSharedScreenProperties[1].placeholder}
   secureTextEntry={props.InputSharedScreenProperties[1].secureTextEntry}
   textContentType={props.InputSharedScreenProperties[1].textContentType}
    >

    </TextInput>
 </View>
 </View>
   
    </>
  );
}
const styles=StyleSheet.create({
  InputDiv:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:5,
    width:'100%',
    height:50,
borderRadius:8,
borderWidth:1,
borderStyle:'solid',
borderColor:'#D2D2D2',
backgroundColor:'#fff',
elevation: 14, // This value will create a shadow effect
    // You can adjust the shadow color and opacity as well
    shadowColor: 'rgba(244, 105, 76, 0.15)',
    shadowOpacity: 1,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },

  },
  
})

export default InputSharedScreen;