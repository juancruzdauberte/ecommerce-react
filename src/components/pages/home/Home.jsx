import { Link } from "react-router-dom";
import { Carousel } from "../../common/carousel/Carousel";
import "./home.css";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Home = () => {
  const { theme } = useContext(ThemeContext);

  document.title = "Inicio";
  return (
    <main className={theme}>
      <section className="carousel-container">
        <Carousel />
      </section>
      <section className="nav-home">
        <div>
          <h1>Nuestras categorias seleccionadas</h1>
        </div>

        <div>
          <ul className="navHome-list">
            <li>
              <Link to="/products">Todos los productos</Link>
            </li>
            <li>
              <Link to="/products/category/tapiz">Tapices</Link>
            </li>
            <li>
              <Link to="/products/category/colgante">Colgantes</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
