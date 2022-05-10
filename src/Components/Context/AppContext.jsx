import React, { createContext, useContext, useEffect, useState } from "react";
import { dataGames } from "../../data/dataGames";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvaider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getItemProducts = () => {
      const getItemPromise = new Promise((resolve) => {
        resolve(dataGames);
      });
  
      getItemPromise.then((data) => {
        setProducts(data);
      });
    };
    
    getItemProducts();
  });

  

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvaider;
