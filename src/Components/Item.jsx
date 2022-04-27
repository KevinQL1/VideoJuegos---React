import React, { useEffect, useState } from "react";
import { dataPrice } from "../Components/data/dataPrice";

const Item = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = () => {
    const getPricePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataPrice);
      }, 3000);
    });
    getPricePromise.then((data) => {
        setPrices(data);
    });
  }

  const getPriceGame = () =>{
    for (let i = 0; i < prices.length; i++) {
      const element = prices[i];
      Object.values(element).map((cost) => (
    <ol key={cost.id}>${cost.value} COP</ol>
    ))}
  }


  return (
    <div>
      <h2 className="card-title">Price</h2>
      {getPriceGame()}
    </div>
  );
};

export default Item;
