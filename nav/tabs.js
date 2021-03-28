import React from "react";
import {View, Image, TouchableOpacity} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { MaterialIcons } from '@expo/vector-icons'; 
import ProfileScreen from "../pages/ProfileScreen";
import FriendsScreen from "../pages/FriendsScreen";
import LoginScreen from "../pages/LoginScreen";
import LoginStackScreen from "../App";

const Tab = createBottomTabNavigator();

 const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Profile':
                            iconName = 'person-outline';
                            break;
                        case 'Friends':
                            iconName = 'people-outline'
                            break;
                    }

                    return <MaterialIcons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: 'white'
                },
                labelStyle: {
                    marginBottom: 4,
                },
                iconStyle: {
                    marginTop: 8
                }
            }}
            backBehavior={'none'}
        >
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Friends" component={FriendsScreen} />
            <Tab.Screen name="Login" component={LoginStackScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;