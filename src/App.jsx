import { Navbar } from "./components/layouts/Navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from "./components/pages/Contacto/Contacto";
import { QuienesSomos } from "./components/pages/QuienesSomos/QuienesSomos";
import { Footer } from "./components/layouts/Footer/Footer";
import { Home } from "./components/pages/home/Home";
import { ProductDetail } from "./components/pages/productDetail/ProductDetail";
import { Cart } from "./components/pages/cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Inicio */}
        <Route path="/" element={<Home />} />
        {/* Productos */}
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/carrito/:id" element={<Cart />} />
        {/* Contacto */}
        <Route path="/contacto" element={<Contacto />} />
        {/* Quienes somos */}
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
