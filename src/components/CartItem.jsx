import React from "react";
import "../App.css";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.nombre} className="cart-item-img" />
      <div className="cart-item-info">
        <h3>{item.nombre}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.precio}</p>
        <p>Subtotal: ${item.precio * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
