import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ItemList = ({ productos }) => {
  return (
    <div className="products-grid">
      {productos.map(producto => (
        <div key={producto.id} className="product-card">
          <img src={producto.img} alt={producto.nombre} />
          <h3>{producto.nombre}</h3>
          <p>${producto.precio}</p>
          <Link to={`/producto/${producto.id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
