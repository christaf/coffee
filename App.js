import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import main from "./Screens/main";

const Stack = createStackNavigator();
const MainScreen = main;
const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: '#0ff', alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
};

const DetailsScreen = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
        </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={MainScreen}/>
                <Stack.Screen name="Details" component={MainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default App;
