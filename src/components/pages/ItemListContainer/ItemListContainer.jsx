import "./ItemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { data: products, loading, error } = useFetch("/public/products.json"); //peticion a public/products.json
  const { categoryName } = useParams();
  console.log(categoryName);

  const productosFiltrados = categoryName
    ? products.filter((product) => product.category === categoryName) //si existe el parametro muestro los productos que tengan el mismo nombre de categoria que el parametro, sino muestro todos los productos
    : products;

  return (
    <main>
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
          </section>
        }
      </section>
    </main>
  );
};
