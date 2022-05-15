import { useCartContext } from "./Context/CartContext";

const Cart = ({ itemCart }) => {
  const { id, img, name, price, quantity } = itemCart;
  const { removeItem } = useCartContext();

  console.log(removeItem(itemCart));

  return (
    <>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={img} alt="Imagenes de juegos" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
              </div>
            </div>
          </td>
          <td>{quantity}</td>
          <td className="font-bold">{price}</td>
          <td className="font-bold">
            <button className="btn btn-sm btn-outline btn-primary" onClick={() => removeItem(itemCart)}>
              Eliminar producto
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Cart;
