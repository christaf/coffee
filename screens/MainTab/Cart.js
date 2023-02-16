import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, FlatList } from 'react-native';
import InCartItem from "../../Elements/InCartItem";
import {styles} from "../../Styles/styles";
import MyButton from "../../Elements/MyButton";


const Cart = () => {
    const navigation = useNavigation();

    const data = [1,2,3];
    const checkout = () => {
        //TODO jak to ma dzialac w ogole xD
    };

    return (
        <View style={{ flex: 1, paddingTop: 30 }}>
            <FlatList
                data={data}
                renderItem ={(item) =>
                    <View style={{ borderRadius: 5, borderWidth: 1, margin: 5, borderColor: '#e0e0e0' }}>
                        <InCartItem title={'CAFF'} description={'som descr'}></InCartItem>
                    </View>
                }
            />
            <MyButton onPress={() => {checkout}} style={styles.button}>
                Checkout
            </MyButton>
        </View>
    );
};
export default Cart;
