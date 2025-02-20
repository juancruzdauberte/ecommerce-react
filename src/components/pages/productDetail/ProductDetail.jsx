import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./productDetail.css";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";

export const ProductDetail = () => {
  const { id } = useParams();
  const { data: items, loading, error } = useFetch("/products.json");

  const product = items.find((el) => Number(el.id) === Number(id));

  return (
    <main>
      {loading ? (
        <LoadingWidget text="producto" />
      ) : (
        <article className="productDetail-card" key={product.id}>
          <section className="productDetail-image">
            <img src={product.url} alt={product.name} />
          </section>
          <section className="productDetail-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <button>Añadir al carrito</button>
          </section>
        </article>
      )}
    </main>
  );
};
