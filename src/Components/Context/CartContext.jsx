import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const isInCart = (id) => {
    cartItems.find((product) => product.id === id);
  };

  const addItem = (product, cantidad) => {
    const newCart = [...cartItems];
    const productIsInCart = isInCart(product.id);

    if (productIsInCart) {
      newCart[
        newCart.findIndex((prod) => prod.id === productIsInCart.id)
      ].quantity += cantidad;

      setCartItems(newCart);
      return;
    }
    product.quantity = cantidad;
    setCartItems([...newCart, product]);
  };

  const removeItem = (product) => {
    const productIsInCart = isInCart(product.id);

    if (!productIsInCart) {
      return;
    }
    const deleteFromCart = cartItems.filter((prod) => prod.id !== product.id);

    setCartItems(deleteFromCart);
  };

  const clearCart = () => setCartItems([]);

  console.log(cartItems);

  return (
    <>
      <CartContext.Provider
        value={{ cartItems, setCartItems, addItem, removeItem, clearCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
