import "./ItemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { LoadingWidget } from "../../common/loadingWidget/LoadingWidget";
import { useFetch } from "../../hooks/useFetch";

export const ItemListContainer = () => {
  const { data, loading, error } = useFetch("/public/products.json"); //peticion a public/products.json

  return (
    <main>
      <section className="item-list-container">
        {loading && <LoadingWidget text="productos" />}

        {error && (
          <div>
            <p>Error al cargar los productos: {error.message}</p>
          </div>
        )}
        {!loading && !error && data.length > 0 && (
          <div className="item-products">
            {data.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}

        {!loading && !error && data.length === 0 && (
          <p>No hay productos disponibles.</p>
        )}
      </section>
    </main>
  );
};
