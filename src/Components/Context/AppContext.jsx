import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvaider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getItemProducts = () => {
      const db = getFirestore();

      const itemColletion = collection(db, "Products");
      getDocs(itemColletion).then((snapshot) => {
        setProducts(
          snapshot.docs.map((idFind) => ({ id: idFind.id, ...idFind.data() }))
        );
      });
    };

    getItemProducts();
  }, []);

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvaider;
