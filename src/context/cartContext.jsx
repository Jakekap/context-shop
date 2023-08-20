/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, deleteFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
