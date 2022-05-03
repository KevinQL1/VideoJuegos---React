import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemCount = () => {
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
    if (count >= 1 && count <= 11) {
      alert(`Agregaste ${count} productos`);
    }
    if (count === 12) {
      alert(
        `Agregaste ${count} productos, obtienes una promoción del 25% en el costo total de tu compra`
      );
    }
  };

  return (
    <>
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
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
