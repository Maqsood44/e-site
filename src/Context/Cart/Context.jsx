import React, { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const CartGlobalContext = createContext("Initial Value");
let data = {
    user: undefined,
    cart : []
};

export default function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);

    return (
        <CartGlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </CartGlobalContext.Provider>
    );
}