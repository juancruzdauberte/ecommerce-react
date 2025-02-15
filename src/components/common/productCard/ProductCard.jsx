import "./productCard.css";

export const ProductCard = ({ product }) => {
  return (
    <section id="product-card">
      <div className="product-img">
        <img src={product.url} />
      </div>
      <div className="product-description">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <span>${product.price}</span>
        <button>Añadir al carrito</button>
      </div>
    </section>
  );
};
