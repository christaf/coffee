import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {registerStyles} from "../Styles/RegisterStyles";
import {styles} from "../Styles/styles";
import MyButton from "../Elements/MyButton";
import {db} from '../config'
import * as authLib from "firebase/auth";

function RegisterScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const handleRegister = () => {
        if (!username || !password || !passwordCheck) {
            alert("Please enter all required fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(username)) {
            alert("Please enter a valid email address.");
            return;
        }

        // if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
        //     alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        //     return;
        // }+


        if (password !== passwordCheck) {
            alert("Passwords do not match.");
            return;
        }

        const auth = authLib.getAuth(db.app);
        authLib.createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                console.log(userCredential);
                console.log('User account created successfully');
                alert("Successfully signed up.")
                navigation.replace("MainTab");
                return authLib.signInWithEmailAndPassword(auth, username, password);
            })
            .then(() => {
                console.log("Logged in");
            })
            .catch((error) => {
                console.log(auth, username, password);
                console.log(error);
                alert("Error signing up. Please try again later.");
            });
    };


    return (
        <View style={styles.welcomeScreen}>
            <View style={registerStyles.registerScreenBox}>
                <Text style={styles.welcomeText}>Rejestracja</Text>
                <TextInput
                    style={registerStyles.textInput}
                    placeholder='E-mail:'
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
                <MyButton onPress={handleRegister} style={styles.button}>
                    Zarejestruj
                </MyButton>
            </View>
            <Image source={require('../images/background_img.jpg')} style={registerStyles.registerImage}/>
        </View>
    );
}

export default RegisterScreen;
