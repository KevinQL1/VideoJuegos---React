import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { gamesId } = useParams();
  const [gamesDetail, setGamesDetail] = useState([]);


  useEffect(() => {
    const db = getFirestore();

    const itemColletion = collection(db, "Products");
    getDocs(itemColletion).then((snapshot) => {
      setGamesDetail(snapshot.docs.find((idFind) => idFind.id === gamesId));
    });

  }, [gamesId]);

  console.log(gamesDetail);
  return (
    <div>
      <ItemDetail findGames={gamesDetail} />
    </div>
  );
};

export default ItemDetailContainer;
