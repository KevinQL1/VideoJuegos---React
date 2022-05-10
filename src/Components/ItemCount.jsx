import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "./Context/CartContext";
import { useAppContext } from "./Context/AppContext";
import swal from "sweetalert";

const ItemCount = ({ onAdd, id }) => {
  const [count, setCount] = useState(1);

  const { addItem } = useCartContext();
  const { products } = useAppContext();

  const addHandler = () => {
    if (count < 12) {
      setCount(count + 1);
    }
  };

  const resHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClick = (id, cantidad) => {
    const findProduct = products.find((prod) => prod.id === id);
    if (!findProduct) {
      swal("Error en la base de datos");
      return;
    }
    addItem(findProduct, cantidad);
    onAdd(count);
  };

  return (
    <>
      <div className="card-actions justify-end bottom-5">
        <button
          className="btn btn-sm btn-outline btn-success top-5"
          onClick={addHandler}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <strong className="top-5">{count}</strong>
        <button
          className="btn btn-sm btn-outline btn-error top-5"
          onClick={resHandler}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <button
        className="btn btn-sm btn-outline btn-primary"
        onClick={() => handleClick(id, count)}
      >
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
