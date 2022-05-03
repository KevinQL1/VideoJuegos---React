import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataGames } from "../data/dataGames";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { gamesId } = useParams();
  const [gamesDetail, setGamesDetail] = useState({});

  useEffect(() => {
    setGamesDetail(dataGames.find((idFind) => idFind.id === gamesId));
  }, [gamesId]);

  return (
    <div>
      <ItemDetail findGames={ gamesDetail } />
    </div>
  );
};

export default ItemDetailContainer;
