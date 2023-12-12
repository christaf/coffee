import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const CubeThrower = () => {
    const [discount, setDiscount] = useState(null);
    const rotateValue = useRef(new Animated.Value(0)).current;

    const startRotation = () => {
        const randomRotations = Math.floor(Math.random() * 5) + 1; // Random rotations between 1 and 5
        const finalRotation = 360 * randomRotations + 30; // 30 degrees to ensure a little more spinning

        Animated.timing(rotateValue, {
            toValue: finalRotation,
            duration: 2000, // Adjust the duration as needed
            useNativeDriver: true,
        }).start(() => {
            determineDiscount(randomRotations);
        });
    };

    const determineDiscount = (rotations) => {
        const faces = ['10%', '20%', 'Free Coffee', '15%', 'No Discount', '25%']; // Discounts for each face
        const landedFace = (rotations - 1) % faces.length;
        setDiscount(faces[landedFace]);
    };

    const spin = rotateValue.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.cube, { transform: [{ rotate: spin }] }]} />
            <TouchableOpacity style={styles.button} onPress={startRotation}>
                <Text style={styles.buttonText}>Throw the Cube!</Text>
            </TouchableOpacity>
            {discount && <Text style={styles.discountText}>You got {discount} off on your coffee!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cube: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    discountText: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CubeThrower;