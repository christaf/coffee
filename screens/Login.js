import MyButton from "../Elements/MyButton";
import {Button} from "react-native-paper";
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


    async function handleLogin(){
        const jsonData = {
            Email: email,
            Password: password
        }

        try{
            console.log("Sending data");
            //const response = await fetch("http://127.0.0.1:5000/login", { #nie dziala
            const response = await fetch("http://192.168.0.172:5000/login", {//lokalny adres ip
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(jsonData)
            });
            console.log("Data sent");
            if(response.ok){
                setIsLogged(true)
                console.log("Response ok");
                const responseData = await response.json();
                console.error("Response data:", responseData);
                console.log("Status: ", responseData.status);
                console.log("Message: ", responseData.message);
                if(responseData.status === "success"){
                    navigation.navigate('MainTab')
                }
            }
        }
        catch (error){
            setError('Invalid email or password')
            console.error(error);
            if (error.response){
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
        }
    }

    /*
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
            navigation.navigate('MainTab')
        } else {
            alert("Invalid email or password")
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

     */
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
                    defaultValue={email}
                />
                <Text style={styles.text}>Password:</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    defaultValue={password}
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