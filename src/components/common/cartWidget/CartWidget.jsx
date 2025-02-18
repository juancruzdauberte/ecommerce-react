import { PiShoppingCartSimpleLight } from "react-icons/pi";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="carrito">
      <button className="carrito-widget">
        <PiShoppingCartSimpleLight />
      </button>
      <span className="carrito-cantidad">2</span>
    </div>
  );
};
