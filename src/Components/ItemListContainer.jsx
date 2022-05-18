import { useEffect, useState } from "react";
import Item from "./Item";
import Spinner from "./Spinner";
import { useAppContext } from "./Context/AppContext";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [itemsList, setItemsList] = useState([]);
  const { products } = useAppContext();

  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
        setItemsList(
          products.map((items) => ({ id: items.id, ...items }))
        );
      }, 2500);
  }, [products]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        itemsList.map((prod) => <Item videoGames={prod} key={prod.id} />)
      )}
    </div>
  );
};

export default ItemListContainer;
