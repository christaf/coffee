import React, {useState, useEffect} from "react";
import {View, Text} from "react-native";
import {FlatList} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Button} from "react-native-paper";
import {ProductStyles} from "../../Styles/ProductStyles";
import Cart from "./Cart";
import OrderableItem from "../../Elements/OrderableItem";
import {useFavourites} from "../../contexts/FavouritesContext";

const ProductMenu = () => {
    const [error, setError] = useState('');
    const [coffeeData, setCoffeeData] = useState([]);
    const { addFavourite, removeFavourite, clearFavourite } = useFavourites();
    const fetchCoffees = async () => {
        const jsonData = {
            message: "get_coffees"
        };

        try {
            console.log("Sending data");
            const response = await fetch("http://172.20.10.7:5000/coffee_list", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(jsonData)
            });


            if (response.ok) {
                const responseData = await response.json();
                const parsedData = JSON.parse(responseData);
                console.log("Parsed data:", parsedData)
                setCoffeeData(parsedData);
            }
        } catch (error) {
            setError('Data receiving error');
            console.error(error);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchCoffees();
                console.log("Coffee data:", coffeeData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(r => console.log(r));
    }, []);

    const navigation = useNavigation();

    const handleAddFavourite = (item) => {
        addFavourite(item);
    }

    const renderItem = ({item}) => (
        <View style={ProductStyles.item}>
            <OrderableItem title={item.name} description={item.bean_type} handleAddFavourite={handleAddFavourite}></OrderableItem>
        </View>
    );

    const handleCheckout = () => {
        navigation.navigate(Cart);
    };

    return (
        <View style={ProductStyles.productsScreen}>
            <FlatList
                data={coffeeData}
                renderItem={renderItem}
                keyExtractor={(item) => (item.default_coffee_id.toString())}
            />
            <View style={{padding: 10}}>
                <Button
                    style={{marginTop: 5}}
                    buttonColor={'#213769'}
                    mode="contained"
                    onPress={handleCheckout}
                >
                    Checkout
                </Button>
            </View>
        </View>
    );
};

export default ProductMenu;
