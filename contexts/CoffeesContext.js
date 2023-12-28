import {createContext, useContext, useState} from "react";

const CoffeesContext = createContext({});

export const useCoffees = () => {
    const context = useContext(CoffeesContext);
    if (!context) {
        throw new Error('useDefaultCoffees must be used within a DefaultCoffeesProvider');
    }
    return context;
};

export const CoffeesProvider = ({ children }) => {
    const [coffees, setCoffees] = useState([]);

    const setDefaultCoffeesContext = (coffees) => {
        setCoffees(coffees);
    };

    return (
        <CoffeesContext.Provider value={{ defaultCoffees: coffees, setDefaultCoffeesContext }}>
            {children}
        </CoffeesContext.Provider>
    );
};