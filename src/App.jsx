import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from "./components/pages/contacto/Contacto";
import { QuienesSomos } from "./components/pages/quienesSomos/QuienesSomos";
import { Footer } from "./components/layouts/footer/Footer";
import { Home } from "./components/pages/home/Home";
import { Cart } from "./components/pages/cart/Cart";
import { ProductDetail } from "./components/pages/productDetail/ProductDetail";
import { Checkout } from "./components/pages/checkout/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Inicio */}
        <Route path="/" element={<Home />} />

        {/* Productos */}
        <Route path="/products" element={<ItemListContainer />} />
        <Route
          path="/products/category/:categoryName"
          element={<ItemListContainer />}
        />
        <Route path="/product-detail/:id" element={<ProductDetail />} />

        {/* Carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Contacto */}
        <Route path="/contact" element={<Contacto />} />

        {/* Quienes somos */}
        <Route path="/about" element={<QuienesSomos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
