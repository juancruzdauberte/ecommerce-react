import "./footer.css";
import { InstagramWidget } from "../../common/instagramWidget/InstagramWidget";
import { FacebookWidget } from "../../common/facebookWidget/FacebookWidget";
import { EmailWidget } from "../../common/emailWidget/EmailWidget";
import { NavLink } from "react-router-dom";

export function Footer() {
  const copyright = String.fromCodePoint(0x00a9);

  return (
    <footer id="footer">
      <section className="widgets-mail">
        <div className="widgets-container">
          <h4>Seguinos en nuestras redes</h4>
          <div className="widgets">
            <InstagramWidget />
            <FacebookWidget />
          </div>
        </div>

        <div className="mail">
          <EmailWidget />
          <a href="mailto:tierradenudos@gmail.com">tierradenudos@gmail.com</a>
        </div>
      </section>

      <section className="navbar-footer">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quienes-somos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Quienes somos
            </NavLink>
          </li>
        </ul>
      </section>

      <section>
        <p>Todos los derechos reservados - {copyright} Tierra de Nudos</p>
      </section>
    </footer>
  );
}
