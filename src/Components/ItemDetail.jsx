import ItemCount from "./ItemCount";

const ItemDetail = ({ videoGames }) => {
  return (
    <>
      <div className="menu menu-horizontal m-7">
        <div
          style={{ height: "42rem" }}
          className="card w-96 mr-0 mt-20 bg-indigo-300 shadow-sm glass"
        >
          <figure>
            <img
              className="h-72"
              src={videoGames.background_image}
              alt="Imagenes videoJuegos"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto">{videoGames.name}</h2>
            <div>
              <h2 className="card-title mr-2 mt-0 mb-0">Genders</h2>
              {videoGames.genres.map((consoles) => (
                <ol className="menu menu-horizontal mr-1" key={consoles.id}>
                  {consoles.name}
                </ol>
              ))}
            </div>
            <h2 className="card-title">Platforms</h2>
            <div>
              {videoGames.parent_platforms.map((consoles) => (
                <li className="menu menu-horizontal mr-1" key={consoles.platform.id}>
                  {consoles.platform.name}
                </li>
              ))}
            </div>
            <div>
              <h2 className="card-title mr-2 mt-0 mb-0">Price</h2>
              <ol className="menu menu-horizontal mr-1">$150.000 COP</ol>
            </div>
            <ItemCount />
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;