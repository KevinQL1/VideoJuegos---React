import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div
      className="navbar bg-indigo-300 fixed top-0 left-0 right-0"
      style={{ zIndex: 1 }}
    >
      <div className="flex-1">
        <button href="#" className="btn btn-outline normal-case text-lg">
          VideoJuegos
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 pl-3">
          <li>
            <button>Inicio</button>
          </li>
          <li>
            <button>Catálogo</button>
          </li>
          <li>
            <button>Carrito {<CartWidget />}</button>
          </li>
          <li>
            <button>Registrarse</button>
          </li>
          <li>
            <button>Iniciar sesión</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
