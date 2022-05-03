import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataGames } from "../data/dataGames";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const { gamesId } = useParams();
  const [gamesDetail, setGamesDetail] = useState({});

  useEffect(() => {
      setGamesDetail(dataGames.find((idFind) => idFind.id === gamesId));
  }, [gamesId]);

  const estilos = {
    width: "95%",
  };

  return (
    <>
      <div style={estilos} className="mx-auto">
        <div className="card card-side mt-40 mb-20 mx-auto shadow-xl bg-indigo-300 glass">
          <figure>
            <img
              style={{height: "34rem", width: "100%"}}
              src={gamesDetail.img}
              alt="Imagenes videoJuegos"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-black mx-auto">{gamesDetail.name}</h2>
            <h2 className="card-title">Description</h2>
            <div>
              <ol className="menu menu-horizontal mr-1">
                {gamesDetail.description}
              </ol>
            </div>
            <h2 className="card-title">Genders</h2>
            <div>
              <li className="menu menu-horizontal mr-1">
                {gamesDetail.genres}
              </li>
            </div>
            <h2 className="card-title">Plataforms</h2>
            <div>
              <li className="menu menu-horizontal mr-1">
                {gamesDetail.plataformas}
              </li>
            </div>
            <h2 className="card-title">Lenguage</h2>
            <div>
              <li className="menu menu-horizontal mr-1">
                {gamesDetail.lenguage}
              </li>
            </div>
            <h2 className="card-title">Price</h2>
            <div>
              <li className="menu menu-horizontal mr-1">{"$" + gamesDetail.price + " COP"}</li>
            </div>
            <div className="card-actions justify-end">
              <ItemCount />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
