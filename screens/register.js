import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 320, padding: 30 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>Rejestracja</Text>
                <TextInput
                    style={{ width: 250, marginTop: 50, backgroundColor: 'white', elevation: 5, padding: 5, fontSize: 18 }}
                    placeholder='Login:'
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <TextInput
                    style={{ width: 250, marginTop: 20, backgroundColor: 'white', elevation: 5, padding: 5, fontSize: 18 }}
                    placeholder='Hasło:'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <TextInput
                    style={{ width: 250, marginTop: 20, backgroundColor: 'white', elevation: 5, padding: 5, fontSize: 18 }}
                    placeholder='Powtórz hasło:'
                    secureTextEntry={true}
                    onChangeText={(text) => setPasswordCheck(text)}
                    value={passwordCheck}
                />
                <Button
                    title="Zarejestruj"
                    style={{ width: 250, marginTop: 20, backgroundColor: '#0084ff', elevation: 5, fontSize: 18 }}
                    onPress={handleRegister}
                />
            </View>
            <Image source={require('../images/background_img.jpg')} style={{ width: '50%', height: '30%' }} />
        </View>
    );
}

export default RegisterScreen;
