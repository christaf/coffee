import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Button title="eee" />
        </View>
    );
}
export default SettingsScreen;