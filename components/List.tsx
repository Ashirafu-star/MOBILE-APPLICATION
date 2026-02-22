import React from 'react'
import{View,Text,StyleSheet,Button} from "react-native"

const ListScreen = ({navigation}:any) =>{
return (
<View style={{flex:1,alignItems:"center",
justifyContent:"center"}}>
<Text  >
    LIST SCREEN
</Text>

<Button 
title="GO Music Screen"
onPress={()=>navigation.navigate("Music")}
/>

</View>
);
}


export default ListScreen;