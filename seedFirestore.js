import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

// Configuración de Firebase (usa las variables de entorno si tenés .env.local)
const firebaseConfig = {
  apiKey: "AIzaSyBH2HIFLYx8--pEhM6C1zW7EdrDt_TmRDw",
  authDomain: "proyectofinalduque.firebaseapp.com",
  projectId: "proyectofinalduque",
  storageBucket: "proyectofinalduque.appspot.com",
  messagingSenderId: "145564378905",
  appId: "1:145564378905:web:97e6d8f2136868f994c788"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Productos a subir
const productos = [
  { id: "1", nombre: "Lana Merino", categoria: "insumos", img: "/merino.jpg", precio: 4500 },
  { id: "2", nombre: "Agujas de Crochet", categoria: "insumos", img: "/agujasCrochet.jpg", precio: 2500 },
  { id: "3", nombre: "Oso Clásico", categoria: "amigurumis", img: "/oso.jpg", precio: 35000 },
  { id: "4", nombre: "Patrón Frida", categoria: "tutoriales", img: "/frida.jpg", precio: 15000 },
  { id: "5", nombre: "Lana Familia", categoria: "insumos", img: "/familia.jpg", precio: 1400 },
  { id: "6", nombre: "Agujas de coser", categoria: "insumos", img: "/agujasCoser.jpg", precio: 1900 },
  { id: "7", nombre: "Monito", categoria: "amigurumis", img: "/monoperfil.jpg", precio: 30000 },
  { id: "8", nombre: "Pingüino", categoria: "tutoriales", img: "/pingüino.jpg", precio: 20000 },
];

const uploadProducts = async () => {
  try {
    for (const product of productos) {
      // Crear un documento con ID igual al del producto
      await setDoc(doc(db, "products", product.id), product);
      console.log(`Producto ${product.nombre} subido correctamente`);
    }
    console.log("Todos los productos fueron subidos a Firestore ✅");
  } catch (error) {
    console.error("Error subiendo productos:", error);
  }
};

uploadProducts();
