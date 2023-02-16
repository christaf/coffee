import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";

import favourite from "./Favourite";
import productMenu from "./ProductMenu";
import settings from "./Settings";
import map from "./Map";

const FavouriteScreen = favourite;
const ProductMenu = productMenu;
const Settings = settings;
const RestaurantMap = map;

const MainTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Menu" component={ProductMenu} />
            <Tab.Screen name="Favourites" component={FavouriteScreen} />
            <Tab.Screen name="Map" component={RestaurantMap} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

export default MainTab;