import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import ProfileScreen from "./pages/ProfileScreen";
import FriendsScreen from "./pages/FriendsScreen";
import Tabs from "./nav/tabs";


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={"Profile"}
      >
        <Stack.Screen name = "Profile" component = {Tabs}/>
        <Stack.Screen name = "Friends" component = {FriendsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

