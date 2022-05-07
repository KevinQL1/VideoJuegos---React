import ItemCountContainer from "./ItemCountContainer";

const ItemDetail = ({ findGames }) => {
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
              src={findGames.img}
              alt="Imagenes videoJuegos"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-black mx-auto">{findGames.name}</h2>
            <h2 className="card-title">Description</h2>
            <div>
              <ol className="menu menu-horizontal mr-1">
                {findGames.description}
              </ol>
            </div>
            <h2 className="card-title">Genders</h2>
            <div>
              <li className="menu menu-horizontal mr-1">{findGames.genres}</li>
            </div>
            <h2 className="card-title">Plataforms</h2>
            <div>
              <li className="menu menu-horizontal mr-1">
                {findGames.plataformas}
              </li>
            </div>
            <h2 className="card-title">Lenguage</h2>
            <div>
              <li className="menu menu-horizontal mr-1">
                {findGames.lenguage}
              </li>
            </div>
            <h2 className="card-title">Price</h2>
            <div>
              <li className="menu menu-horizontal mr-1">
                {"$" + findGames.price + " COP"}
              </li>
            </div>
            <div className="card-actions justify-end">
              <ItemCountContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
