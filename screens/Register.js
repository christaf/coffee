import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import {registerStyles} from "../Styles/RegisterStyles";
import {styles} from "../Styles/styles";
import MyButton from "../Elements/MyButton";

function RegisterScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    function handleRegister() {
        if (password !== passwordCheck) {
            alert("Passwords do not match");
        } else {
            //ZAREJESTRUJ
            //ZALOGUJ
        }
    }

    return (
        <View style={styles.welcomeScreen}>
            <View style={registerStyles.registerScreenBox}>
                <Text style={styles.welcomeText}>Rejestracja</Text>
                <TextInput
                    style={registerStyles.textInput}
                    placeholder='Login:'
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <TextInput
                    style={registerStyles.textInput}
                    placeholder='Hasło:'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <TextInput
                    style={registerStyles.textInput}
                    placeholder='Powtórz hasło:'
                    secureTextEntry={true}
                    onChangeText={(text) => setPasswordCheck(text)}
                    value={passwordCheck}
                />
                <MyButton onPress={() => {handleRegister}} style={styles.button}>
                    Zarejestruj
                </MyButton>
            </View>
            <Image source={require('../images/background_img.jpg')} style={registerStyles.registerImage} />
        </View>
    );
}

export default RegisterScreen;
