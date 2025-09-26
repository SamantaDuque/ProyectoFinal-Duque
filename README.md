# Proyecto Final: E-commerce "Teje y Desteje"

## Descripción
Este proyecto consiste en un **e-commerce** desarrollado con **React** como front-end y **Firebase Firestore** como base de datos. Permite navegar por un catálogo de productos, ver detalles, agregar productos al carrito, y finalizar la compra generando un ID de orden único.

El objetivo del proyecto es demostrar conocimientos en **React**, manejo de **hooks**, **Context API** para estado global (carrito de compras), y la integración con Firebase para persistencia de datos.

---

## Tecnologías utilizadas
- **React** (Single Page Application)
- **React Router** para navegación
- **Firebase Firestore** para almacenar productos y registros de compras
- **CSS** para estilos
- **JavaScript (ES6+)** como lenguaje principal

---

## Estructura del proyecto

src/
├── components/
│   ├── CartWidget.jsx
│   ├── CartItem.jsx
│   ├── ItemCount.jsx
│   ├── ItemDetail.jsx
│   ├── ItemList.jsx
│   └── NavBar.jsx
├── containers/
│   ├── Cart.jsx
│   ├── CheckoutForm.jsx
│   ├── ItemDetailContainer.jsx
│   └── ItemListContainer.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   └── Home.jsx
├── firebase/
│   └── config.js
├── App.jsx
└── App.css


---

## Instalación

1. Clonar el repositorio:

git clone https://github.com/SamantaDuque/ProyectoFinal-Duque.git

2. Entrar a la carpeta del proyecto:

cd ProyectoFinal-Duque

3. Instalar dependencias:

npm install

4. Crear archivo .env con tus credenciales de Firebase (no subir al repositorio):

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id


5. Iniciar la aplicación:

npm start


## Funcionalidades

Listado de productos: desde Firestore, con imagen, nombre, precio y botón de agregar al carrito.

Detalle de producto: muestra información detallada y permite agregar al carrito con cantidad seleccionable.

Carrito de compras: muestra los productos agregados, sus cantidades, subtotal por producto y total general. Permite vaciar el carrito.

Checkout: al finalizar la compra, genera un ID de orden en Firestore y muestra confirmación al usuario.

Carrito en la NavBar: muestra el número total de unidades agregadas.

## Experiencia de usuario

Renderizado condicional para mostrar loaders (Cargando productos...) y mensajes de error (No hay productos disponibles.).

Botones de navegación y enlaces internos respetando el modelo SPA (sin recargar la página).

Oculta el componente ItemCount después de agregar un producto al carrito.

Permite volver al listado de productos desde la vista de detalle con un botón "Volver".

Permite agregar más de un mismo producto al carrito sin reemplazar cantidades.

Genera un ID único de compra al finalizar la orden.

## Estilos

CSS básico en App.css, incluyendo:

NavBar con logo y enlaces.

Tarjetas de productos con hover.

Carrito flotante en la barra de navegación.

Diseño responsivo para el listado de productos.

Carrito y checkout con botones claros y subtotales destacados.

## Notas Importantes

El archivo .env no debe subirse al repositorio.

Se recomienda probar la app haciendo un deploy en plataformas gratuitas como Vercel o Netlify.

Todas las rutas principales funcionan: / (Home), /productos, /producto/:id, /cart, /checkout.

## Autora

Samanta Duque
