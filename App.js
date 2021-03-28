import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import ProfileScreen from "./pages/ProfileScreen";
import FriendsScreen from "./pages/FriendsScreen";
import Tabs from "./nav/tabs";
import LoginScreen from './pages/LoginScreen';


const Stack = createStackNavigator();
const LoginStack = createStackNavigator();


export function LoginStackScreen() {
  return (
      <LoginStack.Navigator headerMode="none">
        <LoginStack.Screen name="Login" component={LoginScreen} />
        <LoginStack.Screen name = "Tabs" component={Tabs}/>
      </LoginStack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={"Profile"}
      >
        <Stack.Screen name = "Tabs" component = {Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

