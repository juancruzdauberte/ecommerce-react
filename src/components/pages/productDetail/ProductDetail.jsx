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
  const [item, setItem] = useState({});
  console.log(id); //llega como string
  const [countCopy, setCountCopy] = useState(1);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    const getProductById = getDoc(refDoc);
    getProductById
      .then((res) => {
        res.exists()
          ? setItem({ id: getProductById.id, ...res.data() })
          : console.log("producto no encontrado");
      })
      .catch((err) => console.error(err))
      .finally(setLoading(false));
  }, [id]);

  const onAdd = () => {
    let productObj = { ...product, quantity: countCopy };
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
