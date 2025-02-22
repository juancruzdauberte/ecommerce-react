import "./productCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <article id="product-card">
      <section className="product-img">
        <img src={product.url} />
      </section>
      <section className="product-description">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <span>${product.price}</span>
        <button>
          <Link to={`/product-detail/${product.id}`}>Ver mas detalle</Link>
        </button>
      </section>
    </article>
  );
};
