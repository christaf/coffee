import MyButton from "../Elements/MyButton";
import {loginStyles} from "../Styles/LoginStyles";
import {styles} from "../Styles/styles";
import React, {useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import * as authLib from "firebase/auth";
import {db} from "../config";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleLogin = async () => {
        const auth = authLib.getAuth(db.app);
        console.log(email, password);
        try {
            const userCredential = await authLib.signInWithEmailAndPassword(auth, email, password);
            console.log("SIGNED IN")
            // if (!userCredential.user.emailVerified) {
            //     throw new Error('Please verify your email address before logging in.');
            // }
            navigation.replace("MainTab");
        } catch (error) {
            let errorMessage = '';
            switch (error.code) {
                case 'auth/invalid-email':
                case 'auth/wrong-password':
                    errorMessage = 'Invalid email or password';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'User not found';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'User disabled';
                    break;
                default:
                    errorMessage = 'Unknown error occurred';
                    break;
            }
            setError(errorMessage);
            console.log(errorMessage);
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
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text style={styles.text}>Password:</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
            </View>

            <MyButton onPress={handleLogin} style={styles.helloButton}>
                <Text style={loginStyles.buttonText}>Login</Text>
            </MyButton>

            <MyButton onPress={() => {
                navigation.navigate('RegisterScreen')
            }} style={styles.button}>
                <Text style={loginStyles.buttonText}>Register</Text>
            </MyButton>
        </View>
    );
}

export default LoginScreen;