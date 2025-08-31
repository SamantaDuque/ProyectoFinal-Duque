import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";


const ItemDetailContainer = () => {
  const { itemId } = useParams(); // id del producto en la URL
    const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1); // contador de unidades
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
    
    new Promise((resolve) => {
        setTimeout(() => resolve(productos), 500);
    }).then((res) => {
        const prod = res.find((p) => p.id === parseInt(itemId));
        setProducto(prod || null);
    });
}, [itemId]);


const agregarAlCarrito = () => {
    if (producto) {
        const productoConCantidad = { ...producto, cantidad };
        setCarrito((prev) => [...prev, productoConCantidad]);
        alert(`${cantidad} x ${producto.nombre} agregado(s) al carrito!`);
    }
};

if (!producto) return <p>Cargando producto...</p>;

    return (
    <div className="producto-detalle">
        <img src={producto.img} alt={producto.nombre} className="producto-img" />
        <h2>{producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
        <p>Categoría: {producto.categoria}</p>

      {/* Contador de unidades */}
        <div className="contador">
        <button onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}>-</button>
        <span>{cantidad}</span>
        <button onClick={() => setCantidad(cantidad + 1)}>+</button>
        </div>

        <button onClick={agregarAlCarrito}>Agregar al carrito</button>

  
        <p>Items en carrito: {carrito.length}</p>
    </div>
    );
};

export default ItemDetailContainer;
