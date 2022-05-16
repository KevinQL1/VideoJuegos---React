import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useCartContext } from "./Context/CartContext";

const NavBar = () => {
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems } = useCartContext();

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.quantity, 0)
    );
  }, [cartItems]);

  return (
    <div className="fixed z-50">
      <div
        className="navbar bg-indigo-300 fixed top-0 left-0 right-0 z-50"
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
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label tabindex="0" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        {productsLength}
                      </span>
                    </div>
                  </label>
                  <div className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                      <span className="mx-auto">
                        <CartWidget />
                      </span>
                      <div className="card-actions">
                        <Link
                          to={"/cart"}
                          className="btn btn-sm btn-outline btn-block btn-primary"
                        >
                          Ver carrito
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
