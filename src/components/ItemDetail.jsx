import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./itemCount";
import { Link } from "react-router-dom";
import "../App.css";

const ItemDetail = ({ producto }) => {
  const { addItem, isInCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem(producto, quantity); // suma cantidad si ya estaba
    setAdded(true);
  };

  return (
    <div className="product-detail">
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} width="300" />
      <p>Precio: ${producto.precio}</p>

      {!added ? (
        // Componente para seleccionar cantidad y agregar al carrito
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      ) : (
        <div className="detail-buttons">
          <Link to="/productos">
            <button>Volver a productos</button>
          </Link>
          <Link to="/cart">
            <button>Finalizar compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
