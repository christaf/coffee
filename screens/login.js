import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from "../styles/login_style";

const LoginScreen = ({navigation}) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Please login!</Text>
            <View style={styles.formContainer}>
                <Text style={styles.prompt}>Login:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                    keyboardType="email-address"
                />
                <Text style={styles.prompt}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <Button style={styles.button} onPress={handleLogin} title={"Login"}>
                <Text style={styles.buttonText}>Login</Text>
            </Button>
            <Button style={styles.button} onPress={() => {navigation.navigate('Register') }} title={"Register"}>
                <Text style={styles.buttonText}>Register</Text>
            </Button>
        </View>
    );
};

export default LoginScreen;