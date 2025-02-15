import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import { useFetch } from "../../hooks/useFetch";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  // const { data, loading, error } = useFetch("API_URL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isAdmin = true;

        if (isAdmin) {
          resolve(products);
        } else {
          reject({ message: "Peticion fallida", status: 400 });
        }
      }, 2500);
    });

    getProducts
      .then((res) => {
        setItems(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="item-list-container">
        {loading ? (
          <div className="loading-spinner">
            <ClipLoader
              color="#ff7b08"
              cssOverride={{}}
              loading
              speedMultiplier={1}
              size={50}
            />
            <p>Cargando productos...</p>
          </div>
        ) : (
          <div className="item-products">
            {items.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};
