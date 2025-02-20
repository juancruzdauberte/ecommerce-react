import { PiShoppingCartSimpleLight } from "react-icons/pi";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="carrito">
      <PiShoppingCartSimpleLight />
      <span className="carrito-cantidad">2</span>
    </div>
  );
};
