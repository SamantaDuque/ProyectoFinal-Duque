import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <div>
                <img src="./logo-teje.png" alt="Logo Teje y Desteje" className="brand-logo" />
                <span className="brand-name">Teje y Desteje</span>
            </div>
            <div>
                <Link to="/">Inicio</Link>
                <Link to="/categoria/insumos">Insumos</Link>
                <Link to="/categoria/amigurumis">Amigurumis</Link>
                <Link to="/categoria/tutoriales">Tutoriales</Link>
                <Link to="/contacto">Contacto</Link>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
