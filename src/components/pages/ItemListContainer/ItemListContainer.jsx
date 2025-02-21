import "./ItemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { Filters } from "../../common/filter/Filters";

export const ItemListContainer = () => {
  const { data: products, loading, error } = useFetch("/public/products.json"); //peticion a public/products.json
  const [filters, setFilters] = useState({ category: "all", minPrice: 0 });

  return (
    <main>
      <section className="item-list-container">
        {loading && <LoadingWidget text="productos" />}

        {error && (
          <div>
            <p>Error al cargar los productos: {error.message}</p>
          </div>
        )}

        <Filters changeFilters={setFilters} />

        {!loading && !error && products.length > 0 && (
          <div className="item-products">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <p>No hay productos disponibles.</p>
        )}
      </section>
    </main>
  );
};
