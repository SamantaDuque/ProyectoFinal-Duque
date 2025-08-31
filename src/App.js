import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return( 
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        /* Página principal */
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Teje y Desteje!"/>} />
        /* Productos por categoria */
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
        /* Detalle de un producto */
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        /* Contacto */
        <Route path="/contacto" element={<h2>Contacto</h2>} />
        /* Ruta 404 */
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  </BrowserRouter>
=======
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return( 
  <div className="App">
    <NavBar />
    <ItemListContainer greeting="Bienvenidos a la tienda de Teje y Desteje!" />
  </div>
>>>>>>> 0ab4cf6fdf80d63ff6a41f7ef18226e836f6e85b
  );
}

export default App;
