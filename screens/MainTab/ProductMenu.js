import {FlatList, View} from "react-native";
import OrderableItem from "../../Elements/OrderableItem";
import {useNavigation} from "@react-navigation/native";
import {ProductStyles} from "../../Styles/ProductStyles";
import {Button} from "react-native-paper";
import React from "react";
import Cart from "./Cart";


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
                        <OrderableItem title={'CAFFE'} description={'Order plox'}></OrderableItem>
                    </View>
                }
            />
            <View style={{ padding: 10 }}>
                <Button style={{ marginTop: 5}}
                        buttonColor={'#213769'}
                        mode="contained"
                        onPress={()=> navigation.navigate(Cart)}
                        //onPress={() => console.log('Deleted')}
                >
                    Checkout
                </Button>
            </View>
        </View>
    );
}
export default ProductMenu;