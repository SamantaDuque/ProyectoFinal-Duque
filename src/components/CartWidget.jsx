import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../App.css";

const CartWidget = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-widget">
      <img
        src="/carrito.png" // <-- IMPORTANTE: imagen en public/
        alt="Carrito de Compras"
        className="carrito-logo"
      />
      <span className="cart-count">{totalItems}</span>
    </Link>
  );
};

export default CartWidget;
