import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
    const navigation = useNavigation();

    const checkout = () => {
        //TODO jak to ma dzialac w ogole xD
    };

    return (<View>
            <Text>Menu</Text>
            <Button title="Checkout" onPress={checkout}/>
        </View>);
};
export default Cart;
