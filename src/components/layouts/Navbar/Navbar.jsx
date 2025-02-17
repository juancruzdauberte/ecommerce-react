import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <section className="logo-titulo">
        <img
          src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045695/logo_j6mmee.png"
          alt="logo"
        />
        <h1>Tierra de Nudos</h1>

        <section
          className="menu-hamburguesa"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <LuMenu />
        </section>
      </section>

      <section className="navbar-cart">
        <section>
          <nav className={`navbar ${menuOpen ? "open" : " "}`}>
            <ul>
              <li>Inicio</li>
              <li>Productos</li>
              <li>Contacto</li>
              <li>Quienes somos</li>
            </ul>
          </nav>
        </section>

        <section>
          <CartWidget />
        </section>
      </section>
    </header>
  );
}
