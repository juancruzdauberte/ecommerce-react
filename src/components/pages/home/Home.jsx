import { Link } from "react-router-dom";
import { Carousel } from "../../common/carousel/Carousel";
import "./home.css";
import { getItems } from "../../../firebase";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Home = () => {
  const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext);

  //accediendo a los datos, no es necesario guardar la respuesta en formato JSON debido a que no es una respuesta HTTP
  useEffect(() => {
    //async - await
    // const getData = async () => {
    //   try {
    //     const res = await getItems();
    //     console.log(res);
    //     setData(res);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // getData();

    //promesas
    getItems()
      .then((res) => setData(res))
      .catch((error) => console.error(error));
  }, []);

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
      <div>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              {item.id} - {item.title} - {item.price} - {item.category}
            </div>
          ))
        ) : (
          <p>Loading...</p> // Mostrar un mensaje mientras se cargan los datos
        )}
      </div>
    </main>
  );
};
