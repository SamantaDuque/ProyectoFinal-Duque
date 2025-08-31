import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productosData from "../data/productos";

const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();  
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(productosData), 500);
    }).then((res) => {
      if (categoriaId) {
        setListaProductos(res.filter((prod) => prod.categoria === categoriaId));
      } else {
        setListaProductos(res);
      }
    });
  }, [categoriaId]);

  return (
    <div>
      {greeting && <h1 className="greeting">{greeting}</h1>}

      {listaProductos.length === 0 ? (
        <p>No hay productos en esta categoría</p>
      ) : (
        <div className="productos-grid">
          {listaProductos.map((prod) => (
            <div className="producto-card" key={prod.id}>
              <img src={prod.img} alt={prod.nombre} className="producto-img" />
              <h3>{prod.nombre}</h3>
              <p>Precio: ${prod.precio}</p>
              <Link to={`/item/${prod.id}`}>
                <button>Ver detalle</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
