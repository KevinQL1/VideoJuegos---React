import { useState } from "react";
import fifa from "../img/fifa.jfif";
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

  return (
    <>
      <div className="card w-80 mx-auto mt-52 mb-52 bg-base-100 shadow-sm">
        <figure>
          <img src={fifa} alt="Fifa 2022" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Fifa 2022
            <div className="badge badge-error-content">NEW</div>
          </h2>
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
          <button className="btn btn-sm btn-outline btn-primary">
            Añadir al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
