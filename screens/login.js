import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
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
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 34,
        marginBottom: 256,
    },
    formContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: 24,
    },
    prompt: {
        marginTop: 24,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 8,
        marginBottom: 36,
    },
    button: {
        backgroundColor: '#4da6ff',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
};

export default LoginScreen;