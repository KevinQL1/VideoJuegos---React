/* eslint-disable array-callback-return */
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import swal from "sweetalert";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({
      nameUser: "",
      telephone: "",
      address: "",
      email: "",
  });
  const [band, setBand] = useState(true);
  const db = getFirestore();
  const itemColletion = collection(db, "Orders");

  useEffect(() => {
    setBand(false);
  }, []);

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

  const menssageRemove = () => {
    swal("Item eliminado", {
      icon: "error",
    });
  };

  const removeItem = async (product) => {
    const deleteFromCart = cartItems.filter((prod) => prod.id !== product);

    const responseDoc = await getDocs(itemColletion);
    responseDoc.docs.map((idFind) => {
      cartItems.map((find) => {
        idFind.data().purchase.map((s) => {
          s.itemsOrders.map((e) => {
            const item = doc(db, "Orders", e.id);
            if (find.id === product) {
              if (item.id === product) {
                console.log(e);
                deleteDoc(item)
              }
            }
          });
        });
      });
    });

    menssageRemove();

    setCartItems(deleteFromCart);
    return;
  };

  const menssageCompra = () => {
    swal("Compra realizada", {
      icon: "success",
    });
  };

  const menssageUpdate = () => {
    swal("Compra actualizada", {
      icon: "success",
    });
  };

  const clearCart = async () => {
    const responseDoc = await getDocs(itemColletion);
    const itemsMap = () =>
      responseDoc.docs.map((pro) => {
        const item = doc(db, "Orders", pro.id);
        const deleteItem = deleteDoc(item);
        return deleteItem;
      });
    itemsMap();
    setCartItems([]);
  };

  const handleSubmitChangeUser = (eventUser) => {
    setUser({ ...user, [eventUser.target.name]: eventUser.target.value })
}

  const saveCartItem = async () => {
    const total = cartItems.reduce(
      (previous, current) => previous + current.quantity * current.price,
      0
    );
    let date = new Date();


    const itemsOrders = cartItems.map((item) => ({
      id: item.id,
      title: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const cartItemsToSave = {
      buyer: user,
      purchase: [
        {
          itemsOrders,
        },
      ],
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      total: total,
    };
    if (!band) {
      menssageCompra();
      const res = await addDoc(itemColletion, cartItemsToSave);
      return res;
    } else {
      const responseDoc = await getDocs(itemColletion);
      const itemsUpdate = () =>
        responseDoc.docs.map((pro) => {
          const update = doc(db, "Orders", pro.id);
          const response = setDoc(update, cartItemsToSave);
          menssageUpdate();
          return response;
        });
      itemsUpdate();
    }
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          setCartItems,
          addItem,
          removeItem,
          clearCart,
          saveCartItem,
          user,
          handleSubmitChangeUser,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
