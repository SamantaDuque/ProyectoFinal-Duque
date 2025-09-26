import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "200px",
      }}
    >
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <Link to={`/detail/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
