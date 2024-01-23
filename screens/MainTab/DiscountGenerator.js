import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Accelerometer} from 'expo-sensors';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withRepeat,
} from 'react-native-reanimated';

const CubeThrower = () => {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const startData = useRef({x: 0, y: 0, z: 0});

    const [subscription, setSubscription] = useState(null);

    const _subscribe = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                setData(accelerometerData);
                startData.current = accelerometerData; // Update startData when accelerometer data changes
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    const [discount, setDiscount] = useState(null);
    const rotationValue = useSharedValue(0);

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    const startRotation = () => {
        _unsubscribe(); // Stop listening to new accelerometer data

        let startTime = Date.now();
        // let startData = { ...data };

        const intervalId = setInterval(async () => {
            _subscribe()
            let currentTime = Date.now();
            let deltaTime = (currentTime - startTime) / 1000; // Convert to seconds

            // Calculate the velocity based on the change in accelerometer data
            let deltaData = data.y - startData.current.y;
            let velocity = deltaData / deltaTime;

            // console.log('Delta data: ', deltaData)
            // console.log('Delta time: ', deltaTime)
            // console.log('Velocity: ', velocity)

            // Animate the cube to rotate based on the calculated velocity
            rotationValue.value = withRepeat(
                withSpring(rotationValue.value + velocity * 50, {
                    damping: 2,
                    velocity: velocity * 500,
                }),
                -1 // -1 means repeat indefinitely
            );

            // startData = { ...data };

            if (deltaTime >= 3) {
                // After 3 seconds, stop the rotation and determine the discount
                clearInterval(intervalId);
                _unsubscribe();
                await determineDiscount(velocity);
            }
        }, 100);
    };

    const determineDiscount = async velocity => {
        try {

            const response = await fetch(`YOUR_BACKEND_API_URL?velocity=${velocity}`, {
                method: 'GET'
            });
            const discounts = await response.json();

            const chosenDiscount = discounts[Math.floor(Math.random() * discounts.length)];

            setDiscount(chosenDiscount);
        } catch (error) {
            console.error('Error fetching discounts:', error.message);
        }
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{rotate: `${rotationValue.value}deg`}],
        };
    });

    return (
        <View style={styles.container}>
            {/*<Text style={styles.text}>Accelerometer:</Text>*/}
            {/*<Text style={styles.text}>x: {data.x}</Text>*/}
            {/*<Text style={styles.text}>y: {data.y}</Text>*/}
            {/*<Text style={styles.text}>z: {data.z}</Text>*/}
            <Animated.View style={[styles.cube, animatedStyle]}/>
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
        backgroundColor: 'rgba(200, 0, 0, 0.7)',
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
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CubeThrower;
