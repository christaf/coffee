import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";

import favourite from "./MainTab/Favourite";
import productMenu from "./MainTab/ProductMenu";
import settings from "./MainTab/Settings";
import map from "./MainTab/Map";
import cart from "./MainTab/Cart";

const FavouriteScreen = favourite;
const ProductMenu = productMenu;
const Settings = settings;
const RestaurantMap = map;
const Cart = cart;

const MainTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Menu" component={ProductMenu}/>
            <Tab.Screen name="Favourites" component={FavouriteScreen} />
            <Tab.Screen name="Map" component={RestaurantMap} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

export default MainTab;