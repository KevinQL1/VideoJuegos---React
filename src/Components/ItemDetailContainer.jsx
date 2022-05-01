
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);


  const getGames = () => {
    const URL = "https://api.rawg.io/api/games?";
    const KEY = "key=207587de017f4d64924fabc7fa8feda3";
    const API = URL + KEY;

    setTimeout(() => {
      fetch(API)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setGames(data.results);
        });
    }, 2000);
  };

  return (
    <div>
      {games.map((products) => (
        <ItemDetail videoGames={products} key={products.id} />
      ))}
    </div>
  );
};

export default ItemDetailContainer;
