import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const { gamesId } = useParams();
  const [gamesDetail, setGamesDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const getDataDocs = async () => {
      const itemColletion = doc(db, "Products", gamesId);
      const responseDoc = await getDoc(itemColletion);
      const dataDoc = responseDoc.data();
      const newDoc = { id: responseDoc.id, ...dataDoc };
      setTimeout(() => {
        setLoading(false);
        setGamesDetail(newDoc);
      }, 1000);
    };

    getDataDocs();
  }, [gamesId]);

  return (
    <div>{loading ? <Spinner /> : <ItemDetail findGames={gamesDetail} />}</div>
  );
};

export default ItemDetailContainer;
