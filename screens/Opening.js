import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from "../Styles/styles";
import MyButton from "../Elements/MyButton";

const OpeningScreen = ({navigation}) => {
    return(
        <View style={styles.welcomeScreen}>
            <Text style={styles.welcomeText}>Witamy w Kawiarni Kim-Chi!</Text>

            <Image source={require('../images/welcome_img.jpg')} style={styles.welcomeImage}/>

            <MyButton onPress={() => {navigation.navigate('Login')}} style={styles.helloButton}> START </MyButton>
            <MyButton onPress={() => {navigation.navigate('Settings')}} style={styles.button}> TO SETTINGS </MyButton>
        </View>
    );
}

export default OpeningScreen;