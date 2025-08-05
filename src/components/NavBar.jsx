import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav >
            <div>
                <img src="./logo-teje.png" alt="Logo Teje y Desteje" className="brand-logo" />
                <span classNameS="brand-name">Teje y Desteje</span>
            </div>
            <div>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;