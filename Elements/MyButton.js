import React from 'react';
import { Pressable, Text } from 'react-native';
import {styles} from "../styles";


const MyButton = ({ onPress, children, style }) => (
    <Pressable
        style={[styles.button, style]}
        onPress={onPress}
    >
        <Text style={styles.text}>{children}</Text>
    </Pressable>
);

export default MyButton;