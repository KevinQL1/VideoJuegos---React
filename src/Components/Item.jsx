import { Link } from "react-router-dom";

const Item = ({ videoGames }) => {
  const estilos = {
    width: "50%",
    padding: "0 2rem 0 2rem",
    height: "50rem",
  };

  return (
    <>
      <div style={estilos} className="menu-horizontal mt-14">
        <div
          style={{ width: "30rem" }}
          className="card mx-auto mt-20 mb-20 bg-indigo-300 shadow-lg glass overflow-auto"
        >
          <figure>
            <img
              style={{ height: "20rem" }}
              src={videoGames.img}
              alt="Imagenes videoJuegos"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto">{videoGames.name}</h2>
            <div>
              <h2 className="card-title mr-2 mt-0 mb-0">Description</h2>
              <ol className="menu menu-horizontal mr-1">
                {videoGames.description}
              </ol>
            </div>
            <Link
              className="btn btn-sm btn-outline btn-primary"
              to={`/catalogo/${videoGames.id}`}
            >
              Ver Más
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
