import MyButton from "../Elements/MyButton";
import {loginStyles} from "../Styles/LoginStyles";
import {styles} from "../Styles/styles";
import React, {useEffect, useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import {db} from '../config'
import {collection, query, where, getDocs} from 'firebase/firestore'

const LoginScreen = ({navigation}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const checkLogin = async () => {
        try {
            const q = query(collection(db, 'users'),
                where('password', '==', password),
                where('email', '==', email))

            const querySnapshot = await getDocs(q)
            return querySnapshot.size > 0;
            // querySnapshot.forEach((doc) => {
            //     setIsLogged(true)
            //     console.log(doc.id, ' => ', doc.data())
            // })
        } catch (err) {
            console.log(err)
            return false;
        }
    }

    const handleLogin = async () => {
        const isSuccessful = await checkLogin()
        if (isSuccessful) {
            setIsLogged(true)
            navigation.navigate('Cart')
        } else {
            setError('Invalid email or password')
        }
    }

    //czym sie roznia te dwa

    useEffect(() => {
        // isLogged
        //     ? navigation.navigate('Cart')
        //     : setError('Invalid email or password')
    }, [isLogged])

    console.log(error)

    return (
        <View style={loginStyles.login_container}>
            <Text style={styles.welcomeText}>Please login!</Text>
            <View style={loginStyles.formContainer}>
                <Text style={styles.text}>Login:</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Login"
                    keyboardType="email-address"
                />
                <Text style={styles.text}>Password:</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>

            <MyButton onPress={handleLogin} style={styles.helloButton}>
                <Text style={loginStyles.buttonText}>Login</Text>
            </MyButton>

            <MyButton onPress={() => {navigation.navigate('Register') }} style={styles.button}>
                <Text style={loginStyles.buttonText}>Register</Text>
            </MyButton>

        </View>
    );
/*
    return (<View style={styles.container}>
        <Text style={styles.welcomeText}>Please login!</Text>
        <View style={styles.formContainer}>
            <Text style={styles.prompt}>Login:</Text>
            <TextInput
                style={styles.input}
                placeholder='Login'
                keyboardType='email-address'
                value={email}
                onChangeText={(oldEmail) => setEmail(oldEmail)}
            />
            <Text style={styles.prompt}>Password:</Text>
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                value={password}
                onChangeText={(oldPassword) => setPassword(oldPassword)}
            />
        </View>
        <Button style={styles.button} onPress={handleLogin} title={'Login'}>
            <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button
            style={styles.button}
            onPress={() => {
                navigation.navigate('Register')
            }}
            title={'Register'}
        >
            <Text style={styles.buttonText}>Register</Text>
        </Button>
        {error && <Text style={styles.errorText}>{error}</Text>}
    </View>)
}

 */

    /*
const styles = {
    login_container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    }, welcomeText: {
        fontSize: 34, marginBottom: 256,
    }, formContainer: {
        alignSelf: 'stretch', paddingHorizontal: 24,
    }, prompt: {
        marginTop: 24,
    }, input: {
        height: 48, borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 8, marginBottom: 36,
    }, button: {
        backgroundColor: '#4da6ff', height: 48, alignItems: 'center', justifyContent: 'center', marginTop: 24,
    }, buttonText: {
        color: '#fff', fontWeight: 'bold',
    }, errorText: {
        textAlign: 'center', color: 'red',
    },
}

     */
};

export default LoginScreen;