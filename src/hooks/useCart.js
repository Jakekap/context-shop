import { CartContext } from "../context/cartContext";
import { useContext, useEffect } from "react";

export function useCart() {
  const { cart, addToCart, deleteFromCart, clearCart } =
    useContext(CartContext);
  const totalCartProducts = cart.length;
  const updateLocalStorage = (cart) => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };
  useEffect(() => {
    updateLocalStorage(cart);
  }, [cart]);
  return { cart, addToCart, deleteFromCart, clearCart, totalCartProducts };
}
