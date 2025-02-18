import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { useState, useEffect } from "react";
import { TbMenu2 } from "react-icons/tb";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header id="header">
      <section className="logo-titulo">
        {isMobile ? (
          <img
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045695/logo_j6mmee.png"
            alt="logo"
          />
        ) : (
          <section
            className="menu-hamburguesa"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <TbMenu2 />
          </section>
        )}
        <h1>Tierra de Nudos</h1>
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
