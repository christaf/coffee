import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import 'firebase/firestore';
import {db} from '../config'

export default function MenuScreen() {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        db.collection('coffees').get()
            .then((querySnapshot) => {
                const data = [];
                querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() });
                });
                setCoffees(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleAddToCart = (id) => {
        // TODO: Implement cart functionality
    };

    const handleAddToFavorites = (id) => {
        // TODO: Implement favorites functionality
    };

    const handleShowInfo = (id) => {
        // TODO: Implement info screen navigation
    };

    const renderCoffeeItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleShowInfo(item.id)}>
            <View style={styles.coffeeItem}>
                <Image source={{ uri: item.imageUrl }} style={styles.coffeeImage} />
                <View style={styles.coffeeDetails}>
                    <Text style={styles.coffeeName}>{item.name}</Text>
                    <Text style={styles.coffeePrice}>${item.price.toFixed(2)}</Text>
                    <View style={styles.coffeeActions}>
                        <TouchableOpacity onPress={() => handleAddToCart(item.id)} style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>Add to cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleAddToFavorites(item.id)} style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>Add to favorites</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={coffees}
            renderItem={renderCoffeeItem}
            keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({
    coffeeItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    coffeeImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 16,
    },
    coffeeDetails: {
        flex: 1,
    },
    coffeeName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    coffeePrice: {
        fontSize: 14,
        color: '#888',
        marginBottom: 8,
    },
    coffeeActions: {
        flexDirection: 'row',
    },
    actionButton: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginRight: 8,
    },
    actionButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
