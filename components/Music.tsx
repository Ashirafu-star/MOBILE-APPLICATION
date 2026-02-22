import React from 'react'
import {View,Text,Button } from "react-native"

const MusicScreen =({navigation}:any) =>{
return(
  <View style={{flex:1,alignItems:"center",
justifyContent:"center"}}>

    <Text >
    MUSIC SCREEN
    </Text>
  <Button
title="GO BACK HOME"
onPress={({})=>navigation.goBack()}
  />

  </View>


);
}



export default MusicScreen;