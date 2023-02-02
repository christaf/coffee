import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


function SettingsScreen({navigation}) {

    const [loggedIn, setLoggedIn] = useState(false);

    return (<View style={styles.container}>
            <Text>Settings</Text>
            <Button
                title="Logout"
                onPress={() => {
                    setLoggedIn(false);
                    navigation.navigate('Login');
                }}
            />
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
});
export default SettingsScreen