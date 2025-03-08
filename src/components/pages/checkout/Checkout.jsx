import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { addDoc, collection } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebase";
import "./checkout.css";

export const Checkout = () => {
  document.title = "Checkout";
  const { theme } = useContext(ThemeContext);
  const { cart, totalAmount, cartEmpty } = useContext(CartContext);
  const [orderID, setOrderId] = useState(null);

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "", //estas propiedades deben ser igual a la de los inputs. ej: name= "email"
    dni: "",
    telefono: "",
  });

  let total = totalAmount();

  const funcionForm = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let ordersCollection = collection(db, "orders");
    let promesaCompra = addDoc(ordersCollection, order);

    promesaCompra.then((res) => {
      setOrderId(res.id);
      cartEmpty();
    });
  };

  const funcionInput = (evento) => {
    const { value, name } = evento.target; //name es el nombre que tiene el input y value es su valor
    setUserInfo({ ...userInfo, [name]: value }); // hacemos una copia del obejto. [name]: value actualiza o agrega una PROPIEDAD dinámica en el objeto.
  };
  return (
    <main className={theme}>
      {orderID ? (
        <section>
          <h1>Gracias por tu compra!</h1>
          <p>El identificador de tu compra es el siguiente {orderID}</p>
        </section>
      ) : (
        <section className="form-finalizarCompra">
          <section className="formulario-container">
            <form onSubmit={funcionForm}>
              <div className="label-input">
                <label>Nombre y apellido</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={funcionInput}
                />
              </div>
              <div className="label-input">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={funcionInput}
                />
              </div>
              <div className="label-input">
                <label>DNI</label>
                <input
                  type="number"
                  placeholder="DNI"
                  name="dni"
                  onChange={funcionInput}
                />
              </div>
              <div className="label-input">
                <label>Telefono</label>
                <input
                  type="number"
                  placeholder="Telefono"
                  name="telefono"
                  onChange={funcionInput}
                />
              </div>
              <div className="btn-container">
                <button type="submit">Comprar</button>
              </div>
            </form>
          </section>
          <section className="productCard-amountTotal">
            <section>
              {cart.map((product) => (
                <section key={product.id} className="cart-productCard">
                  <img src={product.url} alt={product.title} />
                  <h3>{product.title}</h3>
                  <span>${product.price}</span>
                  <div className="cart-quantity">
                    <span>Cantidad: {product.quantity}</span>
                  </div>
                </section>
              ))}
            </section>

            <section className="cart-amountTotal">
              <div className="cart-totalPrice">
                <h2>Total a pagar:</h2>
                <span>${total}</span>
              </div>
            </section>
          </section>
        </section>
      )}
    </main>
  );
};
