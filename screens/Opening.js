import React from 'react';
import {View, Text, Button} from 'react-native';


const OpeningScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Herzlich Willkommen</Text>
            <Button title="TO SETTINGS" onPress={() => {
                navigation.navigate('Settings')
            }} style={{position: 'absolute', right: 0}}/>
            <Button title="Start" onPress={() => {
                navigation.navigate('Login')
            }}/>
        </View>
    );
}

export default OpeningScreen;