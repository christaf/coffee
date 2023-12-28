import React, {createContext, useContext, useState} from 'react';

const FavouritesContext = createContext({});

export const useFavourites = () => {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (favourite) => {
        setFavourites((prevFavourites) => {
            if (prevFavourites.some((item) => item.default_coffee === favourite.default_coffee)) {
                return prevFavourites; // Item already exists, do not add again
            }
            return [...prevFavourites, favourite];
        });
    };

    const removeFavourite = (favourite) => {
        setFavourites((prevFavourites) => prevFavourites.filter((x) => x.default_coffee_id !== favourite.default_coffee_id));
    }

    const clearFavourites = () => {
        setFavourites([]);
    }

    const setFavouritesContext = (favourites) => {
        setFavourites(favourites);
    }

    return (
        <FavouritesContext.Provider value={{favourites, addFavourite, removeFavourite, clearFavourites, setFavouritesContext}}>
            {children}
        </FavouritesContext.Provider>
    );
};
