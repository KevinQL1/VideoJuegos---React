import { useEffect, useState } from "react";
import { useCartContext } from "./Context/CartContext";

const CartWidget = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems } = useCartContext();

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.quantity, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.quantity * current.price,
    0
  );

  return (
    <>
      {!cartOpen && productsLength ? (
        <div className="overflow-x-auto">
        <table className="table table-compact table-bg-indigo-300 ">
          <thead>
            <tr>
              <th className="bg-indigo-300">product</th>
              <th className="bg-indigo-300">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((products) => (
              <tr key={products.id}>
                <td className="font-bold bg-gray-300" ><img src={products.img} alt="Juegos Agregados"/></td>
                <td className="font-bold bg-gray-300" >${products.price} COP</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="bg-indigo-300">TOTAL:</th>
              <th className="bg-indigo-300">${total} COP</th>
            </tr>
          </tfoot>
        </table>
        </div>
      ) : (
        <div className="rounded-xl w-36 h-8 py-1 bg-indigo-300 text-center">
          <p>Tu carrito esta vacio</p>
        </div>
      )}
    </>
  );
};

export default CartWidget;
