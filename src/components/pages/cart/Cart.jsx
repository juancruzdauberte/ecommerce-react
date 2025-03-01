import "./cart.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { DeleteProduct } from "../../common/widgets/deleteProduct/DeleteProduct";
import { NavLink, Link } from "react-router-dom";

export const Cart = () => {
  const { cart, removeById, totalAmount, cartEmpty } = useContext(CartContext);

  let total = totalAmount();
  return (
    <main>
      <section>
        <h1>Carrito</h1>
      </section>

      {cart.length === 0 ? (
        <section className="cart-vacio">
          <p>El carrito actualmente se encuentra vacio</p>
          <button>
            <NavLink to="/products">Ver productos</NavLink>{" "}
          </button>
        </section>
      ) : (
        <section>
          {cart.map((product) => (
            <section key={product.id} className="cart-productCard">
              <img src={product.url} alt={product.title} />
              <h3>{product.title}</h3>
              <span>${product.price}</span>
              <span>Cantidad: {product.quantity}</span>
              <button
                onClick={() => removeById(product.id)}
                className="delete-btn"
              >
                <DeleteProduct />
              </button>
            </section>
          ))}

          <section className="cart-amountTotal">
            <div className="cart-totalPrice">
              <h2>Total a pagar:</h2>
              <span>${total}</span>
            </div>
            <div className="cart-btns">
              <button id="btn-comprar">
                <Link to="/checkout">Terminar compra</Link>
              </button>
              <button onClick={cartEmpty}>Vaciar carrito</button>
            </div>
          </section>
        </section>
      )}
    </main>
  );
};
