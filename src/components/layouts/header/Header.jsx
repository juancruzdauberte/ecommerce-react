import "./header.css";
import { CartWidget } from "../../common/widgets/cartWidget/CartWidget";
import { AccountWidget } from "../../common/widgets/accountWidget/AccountWidget";
import { SearchWidget } from "../../common/widgets/seachWidget/SearchWidget";
import { useState, useEffect, useContext } from "react";
import { TbMenu2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { BtnMode } from "../../common/btnMode/BtnMode";
import { ThemeContext } from "../../context/ThemeContext";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header id="header" className={theme}>
      <section className="logo-titulo">
        {isMobile ? (
          <Link to="/home">
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
          <Link to="/home">Tierra de Nudos</Link>
        </h1>
      </section>

      <section className="navbar-iconos">
        <section>
          <nav className={`navbar ${menuOpen ? "open" : " "}`}>
            <ul>
              <li>
                <BtnMode />
              </li>
              <li>
                <NavLink to="/home">Inicio</NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/products">
                  Productos <RiArrowDownSLine className="dropdown-icon" />
                </NavLink>
                <div className="dropdown-content">
                  <Link
                    to="/products"
                    onClick={() => {
                      document.title = "Productos";
                    }}
                  >
                    Todos
                  </Link>
                  <Link
                    to="/products/category/colgante"
                    onClick={() => {
                      document.title = "Productos - Colgantes";
                    }}
                  >
                    Colgantes
                  </Link>
                  <Link
                    to="/products/category/tapiz"
                    onClick={() => {
                      document.title = "Productos - Tapices";
                    }}
                  >
                    Tapices
                  </Link>
                </div>
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
