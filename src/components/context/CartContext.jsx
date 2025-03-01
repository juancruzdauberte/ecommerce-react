import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let productoEnCarrito = cart.some((el) => el.id === product.id); //busco si esta el producto en el carrito mediante su id

    if (productoEnCarrito) {
      console.log(productoEnCarrito);
      let newCart = cart.map((el) => {
        //si exites creo un nuevo array donde si el id del producto es igual al que esta en el carrito, hago la copia del producto y le sumo la cantidad preva que tenia con la actual
        if (el.id === product.id) {
          return { ...el, quantity: el.quantity + product.quantity };
        } else {
          return el; //sino retorno el producto
        }
      });
      setCart(newCart); //seteo el nuevo array
    } else {
      setCart([...cart, product]); //lo que hace ...cart es traer todo lo que tiene almacenado el array y se le agrega el producto que se le paso por parametro. La funcionalidad para buscar dicho producto la tenemos en product-detail
    }
  };

  const removeById = (id) => {
    let newCart = cart.filter((el) => el.id !== id);
    setCart(newCart);
    console.log(id);
  };

  const totalAmount = () => {
    let total = cart.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);
    return total;
  };

  const totalProducts = () => {
    let total = cart.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);

    return total;
  };

  const cartEmpty = () => {
    setCart([]);
  };

  let data = {
    cart,
    addToCart,
    removeById,
    totalAmount,
    totalProducts,
    cartEmpty,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
