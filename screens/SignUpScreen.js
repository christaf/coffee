import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import * as authLib from "firebase/auth";
import {db} from "../config";
export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (navigation) => {
        const auth = authLib.getAuth(db.app);
        const auth2 = authLib.getAuth();

        auth2.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential.user.email, password);
                console.log('User account created successfully');
                alert("Successfully signed up")
                navigation.navigate("Menu")
            return userCredential.user.sendEmailVerification();
            })
            .catch((error) => {
                console.log(email, password)
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
