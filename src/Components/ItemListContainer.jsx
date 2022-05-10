import { useEffect, useState } from "react";
import Item from "./Item";
import { dataGames } from "../data/dataGames";
import Spinner from "./Spinner";

const ItemListContainer = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = () => {
    const getGamesPromise = new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve(dataGames);
      }, 2500);
    });

    getGamesPromise.then((data) => {
      setGames(data);
    });
  };

  return (
    <div>
      {loading ? <Spinner></Spinner> : games.map((products) => (
        <Item videoGames={products} key={products.id} />
      ))}
    </div>
  );
};

export default ItemListContainer;
