import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div
      className="navbar bg-indigo-300 fixed top-0 left-0 right-0"
      style={{ zIndex: 1 }}
    >
      <div className="flex-1">
        <button href="#" className="btn btn-outline normal-case text-lg">
          <Link to={"/"}>VideoJuegos</Link>
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 pl-3">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/catalogo"}>Catálogo</Link>
          </li>
          <li>
            <Link to={"/cart"}>Carrito {<CartWidget />}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
