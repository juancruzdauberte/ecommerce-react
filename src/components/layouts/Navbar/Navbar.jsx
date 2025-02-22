import "./navbar.css";
import { CartWidget } from "../../common/widgets/cartWidget/CartWidget";
import { AccountWidget } from "../../common/widgets/accountWidget/AccountWidget";
import { SearchWidget } from "../../common/widgets/seachWidget/SearchWidget";
import { useState, useEffect } from "react";
import { TbMenu2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

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
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045695/logo_j6mmee.png"
              alt="logo"
            />
          </Link>
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
        <h1>
          <Link to="/">Tierra de Nudos</Link>
        </h1>
      </section>

      <section className="navbar-iconos">
        <section>
          <nav className={`navbar ${menuOpen ? "open" : " "}`}>
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/products">Productos</NavLink>
              </li>
              <li>
                <NavLink to="/products/category/tapiz">Tapices</NavLink>
              </li>
              <li>
                <NavLink to="/products/category/colgante">Colgantes</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contacto</NavLink>
              </li>
              <li>
                <NavLink to="/about">Quienes somos</NavLink>
              </li>
            </ul>
          </nav>
        </section>

        <section className="iconos">
          <SearchWidget />
          <AccountWidget />
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </section>
      </section>
    </header>
  );
}
