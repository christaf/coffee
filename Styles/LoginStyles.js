import {StyleSheet} from "react-native";

export const loginStyles = StyleSheet.create({
    login_container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: 24,
    },
    prompt: {
        marginTop: 24,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 8,
        marginBottom: 36,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#4da6ff',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
})