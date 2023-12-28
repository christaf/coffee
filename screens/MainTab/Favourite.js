import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFavourites } from '../../contexts/FavouritesContext';

function Favourites() {
    const { favourites, addFavourite, setFavouritesContext } = useFavourites();

    useEffect(() => {
        const jsonData = {
            message: 'get_favourites',
        };

        const fetchFavourites = async () => {
            try {
                const response = await fetch('http://192.168.0.110:5000/favourites', {
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
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.default_coffee}</Text>
                        {/*<Text>{item.price}</Text>*/}
                    </View>
                )}
                keyExtractor={(item) => item.default_coffee}
            />
        </View>
    );
}

export default Favourites;
