import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {SafeAreaView} from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createMaterialTopTabNavigator();

import HomeScreen from "./components/Home";
import ListScreen from "./components/List";
import MusicScreen from "./components/Music";
import SettingsScreen from "./components/Settings"
import BookList from "./components/Books"

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 50,
            backgroundColor: "white",
          },
          tabBarLabelStyle: {
            fontSize: 20,
            color: "white",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarShowLabel:false,
            tabBarIcon:({})=>(
              <MaterialIcons name="home" size={34} color="black" />
            )
           }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{ 
            tabBarIcon:({})=>(
             <MaterialIcons name="contacts" size={34} color="black" /> 
            )
           }}
        />
        <Tab.Screen
          name="Music"
          component={MusicScreen}
          options={{ 
            tabBarIcon:({})=>(
           <FontAwesome6 name="music" size={24} color="black" />
            )
          }}
              /> 

          <Tab.Screen
            name="BookList"
            component={BookList}
             options={{
              tabBarIcon:({})=>(
              <Entypo name="open-book" size={24} color="black" />
              )

             }}
            
            
            />


          <Tab.Screen
           name="Setting"
           component={SettingsScreen}
           options={{
             tabBarIcon:({})=>(
              <Ionicons name="settings-sharp" size={24} color="black" />
             )
           }}
           />
      </Tab.Navigator>
    </NavigationContainer>
   </SafeAreaView>
  );
}
