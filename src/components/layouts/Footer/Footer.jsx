import "./footer.css";
import { InstagramWidget } from "../../common/widgets/instagramWidget/InstagramWidget";
import { FacebookWidget } from "../../common/widgets/facebookWidget/FacebookWidget";
import { EmailWidget } from "../../common/widgets/emailWidget/EmailWidget";
import { NavLink } from "react-router-dom";
import { TikTokWidget } from "../../common/widgets/tiktokWidget/TikTokWidget";

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
            <TikTokWidget />
          </div>
        </div>

        <div>
          <EmailWidget />
        </div>
      </section>

      <section className="navbar-footer">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/products">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/about">Quienes somos</NavLink>
          </li>
        </ul>
      </section>

      <section>
        <p>Todos los derechos reservados - {copyright} Tierra de Nudos</p>
      </section>
    </footer>
  );
}
