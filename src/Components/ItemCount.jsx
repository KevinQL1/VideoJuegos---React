import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({videoPrice}) => {
  const [count, setCount] = useState(1);

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

  const onAdd = () => {
    if (count >= 1) {
      alert(`Agregaste ${count} productos`);
    }
  };

  return (
    <>
    <div>
        <h2 className="card-title">Price</h2>
        <ol>${videoPrice} COP</ol>
      </div>
      <div className="card-actions justify-end">
        <button
          className="btn btn-sm btn-outline btn-success"
          onClick={addHandler}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <strong>{count}</strong>
        <button
          className="btn btn-sm btn-outline btn-error"
          onClick={resHandler}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <button className="btn btn-sm btn-outline btn-primary" onClick={onAdd}>  
        Añadir al carrito
      </button>
    </>
  );
};

export default ItemCount;
