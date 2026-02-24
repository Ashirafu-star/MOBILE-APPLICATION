import React from 'react'
import {Text,StyleSheet,Button,Alert} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'


const SettingsScreen =()=>{
 return(
<SafeAreaView style={{flex:1}}>

    <Text style={styles.header}>MOBILE SETTINGS</Text>
    <Button
     title="SETTINGS"
     onPress={()=>Alert.alert("Hellow,This is the Settings Screen")}
    />

</SafeAreaView>

 )
}
const styles=StyleSheet.create({
header:{
    color:'green',
    fontSize:15,
},

})

 export default SettingsScreen;