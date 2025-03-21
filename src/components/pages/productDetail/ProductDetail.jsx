import { useParams, useNavigate } from "react-router-dom";
import "./productDetail.css";
import { LoadingWidget } from "../../common/widgets/loadingWidget/LoadingWidget";
import { Counter } from "../../common/counter/Counter";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { db } from "../../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { useLoading } from "../../hooks/useLoading";
import { useError } from "../../hooks/useError";
import { toast } from "sonner";

export const ProductDetail = () => {
  const { id } = useParams();
  console.log(id); //llega como string
  const [item, setItem] = useState({});
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const [countCopy, setCountCopy] = useState(1);
  const { loadingTrue, loading, loadingFalse } = useLoading();
  const { error, setError } = useError();

  const navigate = useNavigate();

  useEffect(() => {
    const getProductByID = async () => {
      loadingTrue(); //seteo el loading en true para que me muestre la respectiva interfaz
      try {
        let refCollection = collection(db, "products"); //referencia a la coleccion de "productos"
        let refDoc = doc(refCollection, id); //referencia al documento que se encuentra dentro de la coleccion "productos" usando su ID
        const res = await getDoc(refDoc); //obtengo el producto que hice referencia anteriormente mediante su ID
        res.exists()
          ? setItem({ id: res.id, ...res.data() }) //seteo el item con el ID proporcionado y me traigo el objeto completo que se encuentra en data
          : toast.error("No se encontro el producto");
      } catch (error) {
        setError(error);
      } finally {
        loadingFalse(); //cuando se resuelva la promesa se setea en false para que no se muestre
      }
    };
    getProductByID();
  }, []);

  const onAdd = () => {
    let productObj = { ...item, quantity: countCopy };
    addToCart(productObj);
  };

  if (countCopy === item.stock) {
    toast.warning("Seleccionaste la cantidad máxima disponible del producto");
  }

  return (
    <main className={theme}>
      {loading ? (
        <LoadingWidget text="Cargando producto..." />
      ) : (
        <section className="productDetail-container">
          <section className="titlePage">
            <h2>Detalle del producto</h2>
          </section>

          <article className="productDetail-card" key={item.id}>
            <section className="productDetail-image">
              <img src={item.url} alt={item.title} />
            </section>
            <section className="productDetail-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>${item.price}</span>
              <div>
                <Counter item={item} onChange={setCountCopy} />
              </div>
              <button
                onClick={() => {
                  onAdd();
                  toast.success("Producto añadido al carrito exitosamente", {
                    action: {
                      label: "Ver carrito",
                      onClick: () => navigate("/cart"),
                    },
                  });
                }}
              >
                Añadir al carrito
              </button>
            </section>
          </article>
        </section>
      )}

      {error && (
        <section>
          {() => {
            toast.error(`Error al cargar el producto ${error}`);
          }}
        </section>
      )}
    </main>
  );
};
