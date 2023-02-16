import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {styles} from "../Styles/styles";
import {Button} from "react-native-paper";


function SettingsScreen({navigation}) {

    const [loggedIn, setLoggedIn] = useState(false);

    return (<View style={styles.defaultScreen}>
            <Text>Settings</Text>
            <View style={{ padding: 10, flex: 5}}>
                <Button style={{ marginTop: 5, margin: 5 }}
                        buttonColor={'#213769'}
                        mode="contained"
                        onPress={() => {
                            setLoggedIn(false);
                            navigation.navigate('Login');
                        }}
                >
                    Logout
                </Button>
            </View>
        </View>
    );
}
export default SettingsScreen