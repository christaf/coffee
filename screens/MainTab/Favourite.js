import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useFavourites} from '../../contexts/FavouritesContext';
import InCartItem from "../../Elements/InCartItem";

function Favourites() {
    const {favourites, addFavourite, setFavouritesContext} = useFavourites();

    useEffect(() => {
        const jsonData = {
            message: 'get_favourites',
        };

        const fetchFavourites = async () => {
            try {
                const response = await fetch('http://172.20.10.7:5000/favourites', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonData),
                });

                if (response.ok) {
                    const responseData = await response.json();
                    const parsedData = JSON.parse(responseData);
                    setFavouritesContext(parsedData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchFavourites();
    }, []);

    return (
        <View>
            <FlatList
                data={favourites}
                renderItem={({item}) => (
                    <View>
                        <InCartItem title={item.default_coffee} description={item.price}>

                        </InCartItem>
                    </View>
                )}
                keyExtractor={(item) => item.default_coffee}
            />
        </View>
    );
}

export default Favourites;
