import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

import main from "./screens/Main";
import login from "./screens/Login";
import settings from "./screens/Settings";
import register from "./screens/Register";
import cart from "./screens/Cart";

const MainScreen = main;
const LoginScreen = login;
const SettingsScreen = settings;
const RegisterScreen = register;
const CartScreen = cart;

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={MainScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Settings" component={SettingsScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="Cart" component={CartScreen}/>
                <Stack.Screen name="CartView" component={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

