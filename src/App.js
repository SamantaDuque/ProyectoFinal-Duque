import './App.css';
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
          {/* Página principal */}
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Teje y Desteje!"/>} />
          {/* Productos por categoría */}
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
          {/* Detalle de un producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          {/* Contacto */}
          <Route path="/contacto" element={<h2>Contacto</h2>} />
          {/* Ruta 404 */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
