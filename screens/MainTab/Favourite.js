import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

function Favourites() {
    const [favorites, setFavorites] = useState([]);

    const jsonData = {
        message: "get_favourites"
    }

    useEffect(() => {
        const fetchData = async  () =>
            {
                try {
                    await fetchFavourites();
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        fetchData().then(r => console.log(r));
    }, []);
    const fetchFavourites = async () => {
        try {
            const response = await fetch('http://192.168.0.105:5000/favourites', {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(jsonData)

            });
            if (response.ok) {
                const responseData = await response.json();
                const parsedData = JSON.parse(responseData);
                console.log("Parsed data:", parsedData)
                setFavorites(parsedData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <View>
            <FlatList
                data={favorites}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </View>)}
                keyExtractor={item => item.id.toString()}
            />
        </View>);
}

export default Favourites;