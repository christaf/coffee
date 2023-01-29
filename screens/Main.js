import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from "../Styles/styles";
import MyButton from "../Elements/MyButton";

const MainScreen = ({navigation}) => {
    return (
        <View style={styles.welcomeScreen}>
            <Text style={styles.welcomeText}>Witamy W Kawiarni Kim-Chi!</Text>

            <Image source={require('../images/welcome_img.jpg')} style={styles.welcomeImage} />

            <MyButton onPress={() => {navigation.navigate('Login')}} style={styles.helloButton}> START </MyButton>
            <MyButton onPress={() => {navigation.navigate('Settings') }} style={styles.button}> TO SETTINGZ </MyButton>

        </View>
    );
}

export default MainScreen;