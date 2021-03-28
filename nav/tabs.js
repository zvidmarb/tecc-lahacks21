import React from "react";
import {View, Image, TouchableOpacity} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { MaterialIcons } from '@expo/vector-icons'; 
import ProfileScreen from "../pages/ProfileScreen";
import FriendsScreen from "../pages/FriendsScreen";
import LoginScreen from "../pages/LoginScreen";
import {LoginStackScreen} from "../App";
import { useLinkProps } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

 const Tabs = (props) => {
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
            <Tab.Screen name="Profile" children={() => <ProfileScreen email={props.route.params.username} />} />
            <Tab.Screen name="Friends" component={FriendsScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;