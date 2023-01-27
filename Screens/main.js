import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Herzlich Willkommen</Text>
            <Button title="TO SETTINGS" style={{ position: 'absolute', right: 0 }} />
            <Button title="Start" onPress={() => {navigation.navigate('Login') }} />
        </View>
    );
}

export default MainScreen;