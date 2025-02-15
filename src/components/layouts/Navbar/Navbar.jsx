import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export function Navbar() {
  return (
    <>
      <section className="logo-titulo">
        <img
          src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045695/logo_j6mmee.png"
          alt="logo"
        />
        <h1>Tierra de Nudos</h1>
      </section>

      <section>
        <nav className="navbar">
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
            <li>Quienes somos</li>
          </ul>
          <div>
            <CartWidget />
          </div>
        </nav>
      </section>
    </>
  );
}
