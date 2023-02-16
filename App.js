import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

import opening from "./screens/Opening";
import login from "./screens/Login";
import settings from "./screens/Settings";
import register from "./screens/Register";
import cart from "./screens/Cart";
import favourite from "./screens/Favourite";
import SignupScreen from "./screens/SignUpScreen";
import ProductMenu from "./screens/ProductMenu";

const OpeningScreen = opening;
const LoginScreen = login;
const SettingsScreen = settings;
const RegisterScreen = register;
const CartScreen = cart;
const FavouriteScreen = favourite;

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Opening" component={OpeningScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Settings" component={SettingsScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="Cart" component={CartScreen}/>
                <Stack.Screen name="Favourite" component={FavouriteScreen}/>
                <Stack.Screen name="SignUpScreen" component={SignupScreen}/>
                <Stack.Screen name="ProductMenu" component={ProductMenu}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

