import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    setCart([...cart, product]); //lo que hace ...cart es traer todo lo que tiene almacenado el array y se le agrega el producto que se le paso por parametro. La funcionalidad para buscar dicho producto la tenemos en product-detail
  };

  let data = { cart, addToCart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
