import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {registerStyles} from "../Styles/RegisterStyles";
import {styles} from "../Styles/styles";
import MyButton from "../Elements/MyButton";
import {db} from '../config'

//import firebase from 'firebase/firebase-auth';
import {collection, query, where, getDocs} from 'firebase/firestore'

const RegisterScreen = ({navigation}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [error, setError] = useState('');

    async function handleRegister(){

        const jsonData = {
            Email: email,
            Password: password
        }

        if(password !== passwordCheck){
            alert("Passwords do not match");
        } else {
            try{
                console.log("Sending data");
                // const response = await fetch("http://127.0.0.1:5000/login", { //#nie dziala
                //const response = await fetch("http://192.168.0.108:5000/login", {
                const response = await fetch("http://192.168.0.172:5000/register", {
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
                console.error(error);
                if (error.response){
                    console.error('Response status:', error.response.status);
                    console.error('Response data:', error.response.data);
                    switch (error.response.message()){
                        case "Email is already in use":
                            setIsAlreadyRegistered(true);
                            alert("Email is already in use");
                            break;
                    }
                }
            }
        }
    }


    /*
    const handleRegister = async (navigation) => {
        if (password !== passwordCheck) {
            alert("Passwords do not match");
        } else {
            try {
                const userRef = db.collection("users").where("email", "==", username);
                const snapshot = await userRef.get();

                if (!snapshot.empty) {
                    alert("This email is already in use");
                } else {
                    // tu dymy  const userCredential = await firebase.auth().createUserWithEmailAndPassword(username, password);
                    //   const user = userCredential.user;
                    //    await db.collection("users").doc(user.uid).set({ email: username });
                    navigation.navigate('Login')
                }
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
    }

     */

    return (
        <View style={styles.welcomeScreen}>
            <View style={registerStyles.registerScreenBox}>
                <Text style={styles.welcomeText}>Rejestracja</Text>
                <TextInput
                    style={registerStyles.textInput}
                    placeholder='E-mail:'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
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
