import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {db} from "../firebase";
import * as authLib from "firebase/auth";
export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        const auth = authLib.getAuth();
        console.log(auth);
        authLib.createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                console.log(userCredential);
                console.log('User account created successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button
                title="Sign up"
                onPress={handleSignup}
            />
        </View>
    );
}
