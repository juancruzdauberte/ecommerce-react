import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

export const ItemListContainer = ({ saludo }) => {
  return (
    <>
      <h2>{saludo}</h2>
      <section className="item-products">
        <ProductCard
          title="Tapiz Kuan"
          price="25.000"
          description="Tapiz Colgante de pared"
        />
        <ProductCard
          title="Tapiz Mohana"
          price="35.000"
          description="Tapiz Colgante de pared"
        />
        <ProductCard
          title="Colgante Luna"
          price="20.000"
          description="Colgante de pared"
        />
        <ProductCard
          title="Colgante Kuan"
          price="15.000"
          description="Colgante de pared"
        />
      </section>
    </>
  );
};
