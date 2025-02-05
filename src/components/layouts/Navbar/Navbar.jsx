import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export function Navbar() {
  return (
    <>
      <section className="logo-titulo">
        <img src="../../../../public/logo.png" alt="logo" />
        <h1>Tierra de Nudos</h1>
      </section>

      <section>
        <nav className="navbar">
          <ul>
            <li>Todos</li>
            <li>Colgantes</li>
            <li>Hogar</li>
            <li>Tapiz</li>
          </ul>
          <div>
            <CartWidget />
          </div>
        </nav>
      </section>
    </>
  );
}
