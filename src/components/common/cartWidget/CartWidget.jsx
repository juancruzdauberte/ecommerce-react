import { GrCart } from "react-icons/gr";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="carrito">
      <button className="carrito-widget">
        <GrCart />
      </button>
      <span className="carrito-cantidad">2</span>
    </div>
  );
};
