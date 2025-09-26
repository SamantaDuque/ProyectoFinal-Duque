import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const OrderConfirmation = ({ orderId }) => {
  return (
    <div className="order-confirmation">
      <h2>¡Compra realizada con éxito!</h2>
      <p>Tu ID de orden es: <strong>{orderId}</strong></p>
      <Link to="/">
        <button className="btn-home">Volver a Home</button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
