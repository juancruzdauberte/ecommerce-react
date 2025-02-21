import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./productDetail.css";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";

export const ProductDetail = () => {
  const { id } = useParams();
  console.log(typeof id); //llega como string
  const { data: items, loading, error } = useFetch("/products.json");

  const product = items.find((el) => el.id === parseInt(id));

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
            <button>
              <Link to={`/carrito/${product.id}`}>Añadir al carrito</Link>
            </button>
          </section>
        </article>
      )}
    </main>
  );
};
