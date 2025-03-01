import { useState } from "react";
import "./counter.css";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

export const Counter = ({ item, onChange }) => {
  const [counter, setCounter] = useState(1);

  const suma = () => {
    if (item.stock > counter) {
      setCounter(counter + 1);
      onChange(counter + 1); //creo copia del contador para poder utilizarla en el objeto del producto cuando se le agrega la propiedad de cantidad. O sea, cuando se añade al carrito
    }
  };

  const resta = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      onChange(counter - 1);
    }
  };

  return (
    <section className="counter">
      <section className="counter-btns">
        <button onClick={resta}>
          <IoIosRemove />
        </button>
        <h4>{counter}</h4>
        <button onClick={suma}>
          <IoIosAdd />
        </button>
      </section>
    </section>
  );
};
