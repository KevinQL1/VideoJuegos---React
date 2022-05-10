import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ findGames }) => {
  const { id, img, name, description, genres, plataformas, lenguage, price } = findGames;

  const [finish, setFinish] = useState(false);

  const onAdd = (count) => {
    setFinish(true);
  };

  const estilos = {
    width: "95%",
  };

  return (
    <>
      <div style={estilos} className="mx-auto">
        <div className="card card-side mt-40 mb-20 mx-auto shadow-xl bg-indigo-300 glass">
          <figure>
            <img
              style={{ height: "34rem", width: "100%" }}
              src={img}
              alt="Imagenes videoJuegos"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-black mx-auto">{name}</h2>
            <h2 className="card-title">Description</h2>
            <div>
              <ol className="menu menu-horizontal mr-1">{description}</ol>
            </div>
            <h2 className="card-title">Genders</h2>
            <div>
              <li className="menu menu-horizontal mr-1">{genres}</li>
            </div>
            <h2 className="card-title">Plataforms</h2>
            <div>
              <li className="menu menu-horizontal mr-1">{plataformas}</li>
            </div>
            <h2 className="card-title">Lenguage</h2>
            <div>
              <li className="menu menu-horizontal mr-1">{lenguage}</li>
            </div>
            <h2 className="card-title">Price</h2>
            <div>
              <li className="menu menu-horizontal mr-1">
                {"$" + price + " COP"}
              </li>
            </div>
            <div className="card-actions justify-end">
              {finish ? (
                <div className="card-actions justify-between">
                  <Link className="btn btn-sm btn-outline btn-primary" to={"/catalogo"}>Volver a catálogo</Link>
                  <Link
                    to={"/cart"}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    Terminar Compra
                  </Link>
                </div>
              ) : (
                <ItemCount onAdd={onAdd} id={id} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
