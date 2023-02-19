import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {styles} from "../../Styles/styles";
import {Button} from "react-native-paper";
import * as authLib from "firebase/auth";
import {db} from "../../config";


function SettingsScreen({navigation}) {

    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogOut = (() => {
        const auth = authLib.getAuth(db.app);
        authLib.signOut(auth)
            .then(() => {
                alert("Logged out")
            })
            .catch((error) => console.log(error.code, error.msg));
    })

    return (<View style={styles.defaultScreen}>
            <Text>Settings</Text>
            <View style={{padding: 10, flex: 5}}>
                <Button style={{marginTop: 5, margin: 5}}
                        buttonColor={'#213769'}
                        mode="contained"
                        onPress={() => {
                            setLoggedIn(false);
                            navigation.replace('Login');
                        }}
                >
                    Logout
                </Button>
            </View>
        </View>
    );
}

export default SettingsScreen