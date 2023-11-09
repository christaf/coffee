import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import productMenu from "./ProductMenu";
import favourite from "./Favourite";
import map from "./Map";
import cart from "./Cart";
import settings from "./Settings";

const FavouriteScreen = favourite;
const ProductMenu = productMenu;
const Settings = settings;
const RestaurantMap = map;
const Cart = cart;

const MainTab = () => {
    const Tab = createBottomTabNavigator();
    
    return(
        <Tab.Navigator>
            <Tab.Screen name={"Menu"} component={ProductMenu}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="silverware-fork-knife" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name={"Favourites"} component={FavouriteScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="heart-outline" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name={"Map"} component={RestaurantMap}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="map-marker" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name={"Cart"} component={Cart}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="cart-outline" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name={"Settings"} component={Settings}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="cog-outline" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
        </Tab.Navigator>
    )
}

export default MainTab;