import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    defaultScreen:{
        backgroundColor: 'grey',
        flex: 5,
        paddingLeft: 30
    },
    welcomeScreen:{
        backgroundColor: 'grey',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    helloButton: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: -24,
        padding: 10,
        backgroundColor: '#213769',
        borderRadius: 5,
    },
    button: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: -32,
        padding: 10,
        backgroundColor: '#213769',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    welcomeText: {
        position: 'relative',
        top: -24,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    welcomeImage: {
        width: '80%',
        height: '50%',
        padding: 10,
        borderRadius: 5,
    }
})