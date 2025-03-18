import "./productList.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";
import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useLoading } from "../../hooks/useLoading";
import { useError } from "../../hooks/useError";

export const ProductList = () => {
  const [items, setItems] = useState([]);
  const { loadingTrue, loading, loadingFalse } = useLoading();
  const { error, setError } = useError();
  const { categoryName } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      loadingTrue();
      try {
        let refCollection = collection(db, "products");
        const res = await getDocs(refCollection);
        const nuevoArrayItems = res.docs.map((el) => {
          return { id: el.id, ...el.data() };
        });
        setItems(nuevoArrayItems);
      } catch (error) {
        setError(error);
      } finally {
        loadingFalse();
      }
    };
    getProducts();
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
          {loading && <LoadingWidget text="Cargando productos..." />}

          {error && (
            <section>
              <p>Error al cargar los productos: {error}</p>
            </section>
          )}

          {
            <section className="item-products">
              {productosFiltrados.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </section>
          }
        </section>
      </section>
    </main>
  );
};
