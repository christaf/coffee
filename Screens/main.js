import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Herzlich Willkommen</Text>
            <Button title="TO SETTINGS" style={{ position: 'absolute', right: 0 }} />
            <Button title="Start" onPress={() => { /* do something */ }} />
        </View>
    );
}

export default MainScreen;