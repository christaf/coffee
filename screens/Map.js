import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Map() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    if (errorMsg) {
        return <Text>{errorMsg}</Text>;
    } else if (location) {
        return (
            <MapView style={styles.map}
                     initialRegion={{
                         latitude: location.coords.latitude,
                         longitude: location.coords.longitude,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}>
                <Marker coordinate={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }} />
            </MapView>
        );
    } else {
        return <Text>Loading...</Text>;
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});