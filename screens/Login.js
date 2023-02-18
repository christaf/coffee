import MyButton from "../Elements/MyButton";
import {loginStyles} from "../Styles/LoginStyles";
import {styles} from "../Styles/styles";
import React, {useEffect, useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import firebase from "firebase/compat";

const LoginScreen = ({navigation}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const checkLogin = async () => {
        try {

            firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                    console.log("LOGGED IN");
                    return true;
                }
            ).catch((error) =>
                console.log(error.msg)
            );
        } catch (err) {
            console.log(err)
            return false;
        }
    }

    const handleLogin = async () => {
        const isSuccessful = await checkLogin()
        if (isSuccessful) {
            setIsLogged(true)
            console.log("DUPAr")
            navigation.replace('MainTab')
        } else {
            alert("Invalid email or password")
            setError('Invalid email or password')
        }
    }

    return (
        <View style={loginStyles.login_container}>
            <Text style={styles.welcomeText}>Please login!</Text>
            <View style={loginStyles.formContainer}>
                <Text style={styles.text}>Login:</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Login"
                    keyboardType="email-address"
                />
                <Text style={styles.text}>Password:</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>

            <MyButton onPress={handleLogin} style={styles.helloButton}>
                <Text style={loginStyles.buttonText}>Login</Text>
            </MyButton>

            <MyButton onPress={() => {
                navigation.navigate('Register')
            }} style={styles.button}>
                <Text style={loginStyles.buttonText}>Register</Text>
            </MyButton>
        </View>
    );
}

export default LoginScreen;