import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        console.log("Productos recibidos de Firestore:", items); // <- VERIFICAR

        setProductos(items);
      } catch (err) {
        console.error("Error cargando productos:", err);
        setError("No se pudieron cargar los productos. Revisa la consola.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;
  if (!productos.length) return <p>No hay productos disponibles.</p>;

  return <ItemList productos={productos} />;
};

export default ItemListContainer;
