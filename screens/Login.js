import MyButton from "../Elements/MyButton";
import {loginStyles} from "../Styles/LoginStyles";
import {styles} from "../Styles/styles";
import React, {useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import * as authLib from "firebase/auth";
import {db} from "../config";

const LoginScreen = ({navigation}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const checkLogin = async () => {
        const auth = authLib.getAuth(db.app);
        console.log(email, password);
        authLib.signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate("MainTab")
                return true;
            })
            .catch((error) => {
                console.log(error);
                return false;
            })
    }

    const handleLogin = async () => {
        const isSuccessful = await checkLogin()
        if (isSuccessful === true) {
            setIsLogged(true)
        } else {
            console.log(error.msg)
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
                navigation.navigate('SignUpScreen')
            }} style={styles.button}>
                <Text style={loginStyles.buttonText}>Register</Text>
            </MyButton>
        </View>
    );
}

export default LoginScreen;