import "./ItemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";
import { Link, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { db } from "../../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categoryName } = useParams();

  console.log(categoryName);

  useEffect(() => {
    let refCollection = collection(db, "products");
    const getProducts = getDocs(refCollection);
    getProducts
      .then((res) => {
        const nuevoArrayItems = res.docs.map((el) => {
          return { id: el.id, ...el.data() };
        });
        setItems(nuevoArrayItems);
      })
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

  const { theme } = useContext(ThemeContext);

  const productosFiltrados = categoryName
    ? items.filter((product) => product.category === categoryName) //si existe el parametro muestro los productos que tengan el mismo nombre de categoria que el parametro, sino muestro todos los productos
    : items;

  return (
    <main className={theme}>
      <section className="titlePage">
        <h1>Productos</h1>
      </section>

      <section className="products-filter">
        <section className="filter-container">
          <section>
            <h3>Categorias</h3>
          </section>
          <section className="filter-checkbox">
            <div className="filter-input">
              <span>Todos los productos</span>
              <input type="checkbox" />
            </div>
            <div className="filter-input">
              <span>Colgantes</span>
              <input type="checkbox" />
            </div>
            <div className="filter-input">
              <span>Tapices</span>
              <input type="checkbox" />
            </div>
          </section>
        </section>

        <section className="item-list-container">
          {loading && <LoadingWidget text="productos" />}

          {error && (
            <section>
              <p>Error al cargar los productos: {error.message}</p>
            </section>
          )}

          {
            <section className="item-products">
              {productosFiltrados.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
              {console.log(items)}
            </section>
          }
        </section>
      </section>
    </main>
  );
};
