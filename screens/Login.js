import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../config';
const LoginScreen = ({navigation}) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(async () => {
        const user = doc(db, 'users', 'eFkMWctnqZPSrEOx2wAu');
        const docSNap = await getDoc(user);
        if(docSNap.exists()){
            console.log(docSNap.data());
        }
    })
    const handleLogin = () => {
        setLoggedIn(true);
        navigation.navigate('Cart');
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
            <Button style={styles.button} onPress={() => {
                navigation.navigate('Register')
            }} title={"Register"}>
                <Text style={styles.buttonText}>Register</Text>
            </Button>
        </View>
    );
};
const styles = {
    login_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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