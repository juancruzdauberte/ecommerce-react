import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { addDoc, updateDoc, doc, collection } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";
import { useLoading } from "../../hooks/useLoading";
import { useError } from "../../hooks/useError";
import { db } from "../../config/firebase";
import "./checkout.css";
import { Formulario } from "../../layouts/formulario/Formulario";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

export const Checkout = () => {
  const { theme } = useContext(ThemeContext);
  const { cart, totalAmount, cartEmpty } = useContext(CartContext);
  const [orderID, setOrderId] = useState(null);
  const { loadingTrue, loading, loadingFalse } = useLoading();
  const { error, setError } = useError();

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "", //estas propiedades deben ser igual a la de los inputs. ej: name= "email"
    dni: "",
    telefono: "",
  });

  const campos = [
    {
      label: "Nombre y apellido",
      name: "nombre",
      placeholder: "Nombre y apellido",
    },
    { label: "DNI", name: "dni", placeholder: "DNI" },
    { label: "Email", name: "email", placeholder: "Email" },
    { label: "Telefono", name: "telefono", placeholder: "Telefono" },
  ];

  let total = totalAmount();

  const funcionForm = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    const submitOrder = async () => {
      loadingTrue();
      try {
        const ordersCollection = collection(db, "orders");
        const res = await addDoc(ordersCollection, order);
        setOrderId(res.id);
        return res; //retorno el id para luego resolver la promesa indicandole que cambie el titulo del documento
      } catch (error) {
        setError(error);
      } finally {
        loadingFalse();
      }
    };
    submitOrder().then((res) => {
      cartEmpty(); //luego de la compra vacio el carrito
      if (res) {
        toast.success(`Compra finalizada exitosamente. Id: ${res.id}`);
        document.title = `Order: ${res.id}`; //cambio el titulo del documento
      }

      let productsCollection = collection(db, "products"); //referencio la coleccion de productos

      order.items.forEach((product) => {
        //accedo a la propiedad items del objeto order que es un [] y lo recorro para actualizar el stock del producto una vez que ya se haya hecho la misma
        let productRef = doc(productsCollection, product.id); //referencio el producto con su id
        updateDoc(productRef, { stock: product.stock - product.quantity }); //actualizo el documento referenciado restando stock y la cantidad que se compro
      });
    });
  };

  const funcionInput = (evento) => {
    const { value, name } = evento.target; //name es el nombre que tiene el input y value es su valor
    setUserInfo({ ...userInfo, [name]: value }); // hacemos una copia del obejto. [name]: value actualiza o agrega una PROPIEDAD dinámica en el objeto.
  };
  return (
    <main className={theme}>
      {loading ? (
        <LoadingWidget text="Finalizando compra..." />
      ) : orderID ? (
        <section className="submit-order">
          <h1>Gracias por tu compra!</h1>
          <div className="id-compra">
            <p>
              El identificador de tu compra es el siguiente:
              <span>{orderID}</span>
            </p>
          </div>
          <button>
            <NavLink to="/products">Ver más productos</NavLink>
          </button>
        </section>
      ) : (
        <section className="form-finalizarCompra">
          <section className="formulario-container">
            <Formulario
              campos={campos}
              funcionForm={funcionForm}
              funcionInput={funcionInput}
              btnText="Comprar"
            />
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
              <section className="cart-amountTotal">
                <div className="cart-totalPrice">
                  <h2>Total a pagar:</h2>
                  <span>${total}</span>
                </div>
              </section>
            </section>
          </section>
        </section>
      )}

      {error && (
        <section>
          {() => {
            toast.error(`Hubo un error al hacer la compra: ${error}`);
          }}
        </section>
      )}
    </main>
  );
};
