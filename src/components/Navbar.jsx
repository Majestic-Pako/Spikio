import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav>
            <div className="logo">
                <img src="/img/erizo2.png" alt="logo" />
            </div>
            <ul id="menuList" className={menuOpen ? "active" : ""}>
                <li><Link to={"/"}>Inicio</Link></li>
            </ul>
            <div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i 
                        className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}
                        id="hamburgerIcon"
                    ></i>
                </div>
            </div>
        </nav>
    );
}