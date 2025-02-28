import "./cart.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((product) => (
        <section key={product.id}>
          <div>
            <img src={product.url} alt={product.title} />
          </div>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <h3>{product.quantity}</h3>
        </section>
      ))}
    </div>
  );
};
