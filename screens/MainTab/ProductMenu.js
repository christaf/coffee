import {FlatList, View} from "react-native";
import OrderItem from "../../Elements/OrderItem";
import {useNavigation} from "@react-navigation/native";
import {ProductStyles} from "../../Styles/ProductStyles";
import {Button} from "react-native-paper";
import React from "react";


const ProductMenu = () => {

    const navigation = useNavigation();
    function getItems(numItems) {
        const items = [];
        for (let i = 0; i < numItems; i++) {
            items.push({ id: i, name: `Item ${i}` });
        }
        return items;
    }

    return(
        <View style={ ProductStyles.productsScreen }>
            <FlatList
                data={getItems(5)}
                renderItem={({ item }) =>
                    <View style={ProductStyles.item}>
                        <OrderItem title={'CAFF'} description={'som descr'}></OrderItem>
                    </View>
                }

                data={getItems(5)}
                renderItem={({ item }) =>
                    <View style={ProductStyles.item}>
                        <OrderItem title={'CAFF2'} description={'som descrere'}></OrderItem>
                    </View>
                }
            />
            <View style={{ padding: 10 }}>
                <Button style={{ marginTop: 5}}
                        buttonColor={'#213769'}
                        mode="contained"
                        onPress={() => console.log('Deleted')}>
                    Checkout
                </Button>
            </View>
        </View>
    );
}
export default ProductMenu;