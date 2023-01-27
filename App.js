import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

import main from "./screens/main";
import login from "./screens/login";
import settings from "./screens/settings";
import register from "./screens/register";

const MainScreen = main;
const LoginScreen = login;
const SettingsScreen = settings;
const RegisterScreen = register;

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

