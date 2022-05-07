import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

const ItemCount = ({ alertGames }) => {
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
    const suma = count * alertGames.price;
    if (count >= 1 && count <= 11) {
      swal(
        `Agregaste ${count} producto(s) de ${alertGames.name}. Total de su compra es: $${suma}.000 COP`,
        {
          icon: "success",
          buttons: {
            cancel: "Volver",
            catch: {
              text: "Realizar Compra!",
              value: "catch",
            },
            defeat: "Ver catálogo!",
          },
        }
      ).then((value) => {
        switch (value) {
          case "defeat":
            window.location = "http://localhost:3000/catalogo";
            break;
          case "catch":
            window.location = "http://localhost:3000/cart";
            break;
          default:
        }
      });
    }
    if (count === 12) {
      const sumaPromocion = (suma * 25) / 100;
      const descuento = suma - sumaPromocion;
      swal(
        `Agregaste ${count} producto(s) de ${alertGames.name}. Optienes un descuento del 25% en el total de su compra, que es: $${descuento}.000 COP`,
        {
          icon: "success",
          buttons: {
            cancel: "Volver",
            catch: {
              text: "Realizar Compra!",
              value: "catch",
            },
            defeat: "Ver catálogo!",
          },
        }
      ).then((value) => {
        switch (value) {
          case "defeat":
            window.location = "http://localhost:3000/catalogo";
            break;
          case "catch":
            window.location = "http://localhost:3000/cart";
            break;
          default:
        }
      });
    }
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
      <button className="btn btn-sm btn-outline btn-primary" onClick={onAdd}>
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
