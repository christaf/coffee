import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, List } from 'react-native-paper';
import { useFavourites } from '../contexts/FavouritesContext';

const OrderableItem = ({ title, description }) => {
    const { addFavourite } = useFavourites();

    const handleAddToFavorites = () => {
        const coffee = {
            default_coffee: title,
        };

        addFavourite(coffee);
    };

    return (
        <View>
            <List.Item
                title={title}
                description={description}
                left={(props) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar.Image
                            size={64}
                            source={{
                                uri:
                                    'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                            }}
                        />
                    </View>
                )}
                right={(props) => (
                    <View>
                        <Button
                            style={{ alignItems: 'center', marginTop: 5 }}
                            dark={true}
                            buttonColor={'#213769'}
                            icon="cart-arrow-down"
                            mode="contained"
                            onPress={handleAddToFavorites}
                        >
                            Add to cart
                        </Button>
                    </View>
                )}
            />
        </View>
    );
};

export default OrderableItem;
