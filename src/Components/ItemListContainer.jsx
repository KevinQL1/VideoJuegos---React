import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
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
    }, 3000);
  };

  return (
    <div>
      {games.map((products) => (
        <ItemDetailContainer videoGames={products} key={products.id} />
      ))}
    </div>
  );
};

export default ItemListContainer;
