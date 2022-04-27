import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

export const ItemListPrice = () => {
  const [prices, setPrice] = useState([]);

  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = () => {
    const JSON = "./Json/Price.json";

    setTimeout(() => {
      fetch(JSON)
        .then((response) => {
            return response.json();
          })
        .then((data) => {
          data.forEach((element) => {
            setPrice(element.value);
          });
        });
    }, 3000);
  };

  return (
    <div>
      {Object.keys(prices).map((cost) => (
        <ItemCount videoPrice={cost} key={cost.id} />
      ))}
    </div>
  );
};
