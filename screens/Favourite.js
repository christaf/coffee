import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

function Favourites() {
    const [favorites, setFavorites] = useState([]);

    return (
        <View>
            <FlatList
                data={favorites}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default Favourites;