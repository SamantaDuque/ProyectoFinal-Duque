import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clear, totalPrice } = useCart();

  if (cart.length === 0)
    return (
      <div>
        <p>El carrito está vacío</p>
        <Link to="/productos">Volver a comprar</Link>
      </div>
    );

  return (
    <div>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clear}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
