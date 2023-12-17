import {FlatList, View} from "react-native";
import OrderableItem from "../../Elements/OrderableItem";
import {useNavigation} from "@react-navigation/native";
import {ProductStyles} from "../../Styles/ProductStyles";
import {Button} from "react-native-paper";
import React from "react";
import Cart from "./Cart";


const ProductMenu = () => {
    const [error, setError] = React.useState('');

    async function fetch_coffees(){

        const jsonData = {
            message: "get_coffees"
        }

        try{
            console.log("Sending data");
            // const response = await fetch("http://127.0.0.1:5000/login", { //#nie dziala
            //const response = await fetch("http://192.168.0.108:5000/login", {
            const response = await fetch("http://192.168.0.172:5000/coffee_list", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(jsonData)
            });
            console.log("Data sent");
            if(response.ok){
                console.log("Response ok");
                const responseData = await response.json();
                console.error("Response data:", responseData);
                console.log("Status: ", responseData.status);
                console.log("Message: ", responseData.message);
            }
        }
        catch (error){
            setError('Data receiving error')
            console.error(error);
            if (error.response){
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
        }
    }


    const navigation = useNavigation();
    function getItems(numItems) {
        //const items = [];
        /*
        for (let i = 0; i < numItems; i++) {
            items.push({ id: i, name: `Item ${i}` });
        }
        return items;
         */
        return fetch_coffees();
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