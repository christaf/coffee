import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

import opening from "./screens/Opening";
import login from "./screens/Login";
import settings from "./screens/MainTab/Settings";
import register from "./screens/Register";
//import SignupScreen from "./screens/SignUpScreen";
import mainTab from "./screens/MainTab/MainTab";

import {FavouritesProvider} from "./contexts/FavouritesContext";

const OpeningScreen = opening;
const LoginScreen = login;
const SettingsScreen = settings;
const RegisterScreen = register;
const MainTab = mainTab;

const Stack = createStackNavigator();

export default function App() {
    return (
        <FavouritesProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Opening"
                                  component={OpeningScreen}
                                  options={({navigation}) => ({
                                      headerShown: false
                                  })
                                  }/>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Settings" component={SettingsScreen}/>
                    <Stack.Screen name="Register" component={RegisterScreen}/>

                    <Stack.Screen name="MainTab" component={MainTab}/>

                </Stack.Navigator>
            </NavigationContainer>
        </FavouritesProvider>
    );
}

//<Stack.Screen name="SignUpScreen" component={SignupScreen}/>
