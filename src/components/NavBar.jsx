import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 0ab4cf6fdf80d63ff6a41f7ef18226e836f6e85b
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav >
            <div>
                <img src="./logo-teje.png" alt="Logo Teje y Desteje" className="brand-logo" />
<<<<<<< HEAD
                <span className="brand-name">Teje y Desteje</span>
            </div>
            <div>
                <Link to="/">Inicio</Link>
                <Link to="/categoria/insumos">Insumos</Link>
                <Link to="/categoria/amigurumis">Amigurumis</Link>
                <Link to="/categoria/tutoriales">Tutoriales</Link>
                <Link to="/contacto">Contacto</Link>
=======
                <span classNameS="brand-name">Teje y Desteje</span>
            </div>
            <div>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
>>>>>>> 0ab4cf6fdf80d63ff6a41f7ef18226e836f6e85b
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;