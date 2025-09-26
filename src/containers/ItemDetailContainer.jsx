import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "../components/ItemDetail";
import "../App.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProducto({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    };
    getProduct();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
