import { useParams } from "react-router-dom";
import "./productDetail.css";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";
import { Counter } from "../../common/counter/Counter";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { db } from "../../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";

export const ProductDetail = () => {
  const { id } = useParams();
  console.log(id); //llega como string
  const [item, setItem] = useState({});
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const [countCopy, setCountCopy] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductByID = async () => {
      try {
        let refCollection = collection(db, "products"); //referencia a la coleccion de "productos"
        let refDoc = doc(refCollection, id); //referencia al documento que se encuentra dentro de la coleccion "productos" usando su ID
        const res = await getDoc(refDoc); //obtengo el producto que hice referencia anteriormente mediante su ID
        res.exists()
          ? setItem({ id: res.id, ...res.data() }) //seteo el item con el ID proporcionado y me traigo el objeto completo que se encuentra en data
          : console.log("producto no encontrado");
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProductByID();
  }, []);

  const onAdd = () => {
    let productObj = { ...item, quantity: countCopy };
    console.log(productObj);
    addToCart(productObj);
  };

  return (
    <main className={theme}>
      {loading ? (
        <LoadingWidget text="producto" />
      ) : (
        <article className="productDetail-card" key={item.id}>
          <section className="productDetail-image">
            <img src={item.url} alt={item.title} />
          </section>
          <section className="productDetail-info">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <span>${item.price}</span>
            <div>
              <Counter item={item} onChange={setCountCopy} />
            </div>
            <button onClick={onAdd}>Añadir al carrito</button>
          </section>
        </article>
      )}
    </main>
  );
};
