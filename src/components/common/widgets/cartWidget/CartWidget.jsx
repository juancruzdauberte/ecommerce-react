import { PiShoppingCartSimpleLight } from "react-icons/pi";
import "./cartWidget.css";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);

  const totalInCart = totalProducts();

  return (
    <div className="carrito">
      <PiShoppingCartSimpleLight />
      <span className="carrito-cantidad">{totalInCart}</span>
    </div>
  );
};
