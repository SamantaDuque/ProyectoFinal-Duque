import React, { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import OrderConfirmation from "../components/OrderConfirmation";

const CheckoutForm = () => {
  const { cart, totalPrice, clear } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError("Por favor completa todos los campos.");
      return;
    }

    setLoading(true);
    setError("");

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        quantity: item.quantity,
      })),
      total: totalPrice,
      createdAt: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clear(); 
    } catch (err) {
      console.error("Error al generar la orden:", err);
      setError("Hubo un error al procesar tu compra.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) return <OrderConfirmation orderId={orderId} />;

  return (
    <div className="checkout-form">
      <h2>Finalizar Compra</h2>
      {cart.length === 0 && (
        <p>
          Tu carrito está vacío. <Link to="/productos">Volver a productos</Link>
        </p>
      )}
      {error && <p className="error">{error}</p>}
      {cart.length > 0 && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={buyer.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={buyer.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="tel"
              name="phone"
              value={buyer.phone}
              onChange={handleChange}
            />
          </div>

          <h3>Resumen del carrito:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.nombre} - {item.quantity} x ${item.precio} = $
                {item.quantity * item.precio}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>

          <button type="submit" disabled={loading}>
            {loading ? "Procesando..." : "Confirmar Compra"}
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
