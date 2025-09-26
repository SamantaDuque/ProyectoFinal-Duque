import React, { useState } from "react";
import "../App.css"

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
