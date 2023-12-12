import MyButton from "../Elements/MyButton";
import {loginStyles} from "../Styles/LoginStyles";
import {styles} from "../Styles/styles";
import React, {useEffect, useState} from 'react'
import {View, Text, TextInput} from 'react-native'

const LoginScreen = ({navigation}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    async function handleLogin(){
        navigation.reset({
            index: 0,
            routes: [{ name: 'MainTab' }], // Replace 'MainTab' with the name of your main screen
        });

        const jsonData = {
            Email: email,
            Password: password
        }

        try{
            console.log("Sending data");
            const response = await fetch("http://192.168.0.104:5000/login", {
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
                    setIsLogged(true)
                    navigation.navigate('MainTab')
                }
            }
        }
        catch (error){
            setError('Invalid email or password')
            console.error(error);
            setError('Invalid email or password')
            if (error.response){
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
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