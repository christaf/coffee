import styles from "../styles/casual_style";
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';


export default function SettingsScreen({navigation}) {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <Button
                title="Logout"
                onPress={() => {
                    setLoggedIn(false);
                    navigation.navigate('Login');
                }}
            />
        </View>
    );
}