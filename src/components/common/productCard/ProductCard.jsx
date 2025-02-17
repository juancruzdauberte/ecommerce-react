import "./productCard.css";

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
        <button>Ver mas detalle</button>
      </section>
    </article>
  );
};
