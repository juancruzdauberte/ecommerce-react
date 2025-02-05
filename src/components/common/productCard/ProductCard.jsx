import "./productCard.css";

export const ProductCard = ({ title, price, description }) => {
  return (
    <section id="product-card">
      <div className="product-img">
        <img src="" alt="" />
      </div>
      <div className="product-description">
        <h5>{title}</h5>
        <p>{description}</p>
        <span>${price}</span>
        <button>Agregar al carrito</button>
      </div>
    </section>
  );
};
