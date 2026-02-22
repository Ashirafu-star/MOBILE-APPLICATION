import React from "react"
import { View,Text,Button,StyleSheet} from "react-native"

const HomeScreen = ({navigation}:any) =>{
return(
 <View style={{flex:1,alignItems:"center",
justifyContent:"center"}}>
    <Text >
        HomeScren
    </Text>
   <Button 
    title='GO LIST SCREEN'
    onPress={()=>navigation.navigate("List")}/>
  
</View>   
)
}



export default HomeScreen;