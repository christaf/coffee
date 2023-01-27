import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

import main from "./Screens/main";
import login from "./Screens/login";
import settings from "./Screens/settings";

const MainScreen = main;
const LoginScreen = login;
const SettingsScreen = settings;
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });