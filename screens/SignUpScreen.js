import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import * as authLib from "firebase/auth";
import {db} from "../firebase";
export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (navigation) => {
        const auth = authLib.getAuth(db.app);
        authLib.createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                console.log(userCredential);
                console.log('User account created successfully');
                userCredential.user.sendEmailVerification().then().catch() ;
                alert("Successfully signed up")
                navigation.navigate("Menu")
            })
            .catch((error) => {
                console.log(auth, email, password)
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
