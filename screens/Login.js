import MyButton from "../Elements/MyButton";
import {loginStyles} from "../Styles/LoginStyles";
import {styles} from "../Styles/styles";
import React, {useEffect, useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import {db} from '../config'
import {collection, query, where, getDocs} from 'firebase/firestore'

const LoginScreen = ({navigation}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const checkLogin = async () => {
        try {
            //Do testów pomija login
            return true;

            const q = query(collection(db, 'users'),
                where('password', '==', password),
                where('email', '==', email))

            const querySnapshot = await getDocs(q)
            return querySnapshot.size > 0;
            // querySnapshot.forEach((doc) => {
            //     setIsLogged(true)
            //     console.log(doc.id, ' => ', doc.data())
            // })
        } catch (err) {
            console.log(err)
            return false;
        }
    }

    const handleLogin = async () => {
        const isSuccessful = await checkLogin()
        if (isSuccessful) {
            setIsLogged(true)
            //navigation.navigate('Cart')
            navigation.navigate('MainTab')
        } else {
            setError('Invalid email or password')
        }
    }

    //czym sie roznia te dwa

    useEffect(() => {
        // isLogged
        //     ? navigation.navigate('Cart')
        //     : setError('Invalid email or password')
    }, [isLogged])

    console.log(error)

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