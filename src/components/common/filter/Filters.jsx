import { useState } from "react";
import "./filter.css";

export const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);
  return (
    <section className="filters">
      <div className="price">
        <label htmlFor="price">Precio minimo</label>
        <input
          type="range"
          id="price"
          min="0"
          max="5000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="tapiz">Tapiz</option>
          <option value="colgante">Colgante</option>
        </select>
      </div>
    </section>
  );
};
