import { useEffect, useState } from "react";
import Item from "./Item";
import { dataGames } from "../data/dataGames";

const ItemListContainer = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = () => {
    const getGamesPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve( dataGames )
      }, 2000);
    });

    getGamesPromise.then((data) =>{
      setGames(data);
    })
  };

  return (
    <div>
      {games.map((products) => (
        <Item videoGames={products} key={products.id} />
      ))}
    </div>
  );
};

export default ItemListContainer;
