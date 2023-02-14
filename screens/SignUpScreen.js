import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from "firebase/compat";

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
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
