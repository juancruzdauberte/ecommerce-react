import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./productDetail.css";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";
import { Counter } from "../../common/counter/Counter";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";

export const ProductDetail = () => {
  const { id } = useParams();
  console.log(typeof id); //llega como string
  const { data: items, loading, error } = useFetch("/products.json");
  const { addToCart } = useContext(CartContext);
  const [countCopy, setCountCopy] = useState(1);
  const product = items.find((el) => el.id === parseInt(id));

  const onAdd = () => {
    let productObj = { ...product, quantity: countCopy };
    addToCart(productObj);
  };

  return (
    <main>
      {loading ? (
        <LoadingWidget text="producto" />
      ) : (
        <article className="productDetail-card" key={product.id}>
          <section className="productDetail-image">
            <img src={product.url} alt={product.name} />
          </section>
          <section className="productDetail-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <div>
              <Counter item={product} onChange={setCountCopy} />
            </div>
            <button onClick={onAdd}>Añadir al carrito</button>
          </section>
        </article>
      )}
    </main>
  );
};
