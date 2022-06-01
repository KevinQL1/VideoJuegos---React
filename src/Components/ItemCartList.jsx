import Cart from "./Cart";
import { useCartContext } from "./Context/CartContext";
import carro from "../img/carro-vacio.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCartList = () => {
  const [newCartProduct, setNewCartProduct] = useState([]);
  const { clearCart, cartItems, saveCartItem, handleSubmitChangeUser, user } = useCartContext();

  useEffect(() => {
    const getGamesCart = () => {
      const getGamesNewCart = new Promise((resolve) => {
        resolve(cartItems);
      });

      getGamesNewCart.then((data) => {
        setNewCartProduct(data);
      });
    };
    getGamesCart();
  }, [cartItems]);

  const total = newCartProduct.reduce(
    (previous, current) => previous + current.quantity * current.price,
    0
  );

  return (
    <>
      {newCartProduct.length === 0 ? (
        <div style={{ margin: "15rem 0 0 0" }}>
          <img className="mx-auto h-48" src={carro} alt="carrito vacio" />
          <div className="text-center mt-8">
            <strong>
              CARRITO VACIO!!, Por favor ingrese productos al carrito...{" "}
              <Link
                to={"/catalogo"}
                className="btn btn-sm btn-outline btn-primary"
              >
                Catálogo
              </Link>
              .
            </strong>
          </div>
        </div>
      ) : (
        <div className="mt-32 mx-10 mb-10 bg-indigo border border-indigo-300 rounded-md p-8 overflow-hidden">
          <form>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Nombre completo:
              </span>
              <input
                id="nameUser"
                name="nameUser"
                type="text"
                onChange={handleSubmitChangeUser}
                required
                placeholder="Ingresa tu nombre completo "
                className="bg-indigo border border-indigo-300 rounded-md text-sm shadow-sm placeholder-indigo-400 w-full pb-1"
              />
            </label>
            <label className="block mt-6">
              <span className="block text-sm font-medium text-slate-700">
                Teléfono:
              </span>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                onChange={handleSubmitChangeUser}
                required
                placeholder="Ingresa un teléfono"
                className="bg-indigo border border-indigo-300 rounded-md text-sm shadow-sm placeholder-indigo-400 w-full pb-1"
              />
            </label>
            <label className="block mt-6">
              <span className="block text-sm font-medium text-slate-700">
                Dirección de envío:
              </span>
              <input
                id="address"
                name="address"
                type="text"
                onChange={handleSubmitChangeUser}
                required
                placeholder="Ingresa dirección de envío"
                className="bg-indigo border border-indigo-300 rounded-md text-sm shadow-sm placeholder-indigo-400 w-full pb-1"
              />
            </label>
            <label className="block mt-6">
              <span className="block text-sm font-medium text-slate-700">
                Email:
              </span>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleSubmitChangeUser}
                required
                placeholder="Ingersa correo electrónico"
                className="bg-indigo border border-indigo-300 rounded-md text-sm shadow-sm placeholder-indigo-400 w-full pb-1"
              />
            </label>
          </form>
          <div className="overflow-x-auto my-10">
            <table className="table table-compact table-bg-indigo-300 w-full">
              <thead>
                <tr>
                  <th className="bg-indigo-300">#id</th>
                  <th className="bg-indigo-300">Name</th>
                  <th className="bg-indigo-300">Quantity</th>
                  <th className="bg-indigo-300">Price</th>
                  <th className="bg-indigo-300"></th>
                </tr>
              </thead>
              {newCartProduct.map((products) => (
                <Cart key={products.id} itemCart={products} />
              ))}
              <tfoot>
                <tr>
                  <th className="bg-indigo-300"></th>
                  <th className="bg-indigo-300">TOTAL: ${total} COP</th>
                  <th className="bg-indigo-300"></th>
                  <th className="bg-indigo-300"></th>
                  <th className="bg-indigo-300">
                    <button
                      className="btn btn-sm btn-outline btn-error"
                      onClick={clearCart}
                    >
                      Vaciar carrito
                    </button>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="flex justify-around">
            <Link
              to="/VideoJuegos"
              className="btn btn-sm btn-outline btn-primary"
            >
              Volver al inicio
            </Link>
            {user.email === "" || user.nameUser === "" || user.address === "" || user.telephone === ""  ? (
              <div></div>
            ) : (
              <button
                className="btn btn-sm btn-outline btn-primary"
                onClick={saveCartItem}
              >
                Pagar
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCartList;
