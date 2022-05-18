import Cart from "./Cart";
import { useCartContext } from "./Context/CartContext";
import carro from "../img/carro-vacio.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCartList = () => {
  const [newCartProduct, setNewCartProduct] = useState([]);
  const { clearCart, cartItems } = useCartContext();

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
        <div>
          <div className="mx-10 -z-50">
            <div className="overflow-x-auto my-52 w-full">
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
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCartList;
