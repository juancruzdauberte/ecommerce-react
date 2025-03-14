import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from "./components/pages/contacto/Contacto";
import { QuienesSomos } from "./components/pages/quienesSomos/QuienesSomos";
import { Footer } from "./components/layouts/footer/Footer";
import { Home } from "./components/pages/home/Home";
import { Cart } from "./components/pages/cart/Cart";
import { ProductDetail } from "./components/pages/productDetail/ProductDetail";
import { Checkout } from "./components/pages/checkout/Checkout";
import { CartProvider } from "./components/context/CartContext";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { ThemeProvider } from "./components/context/ThemeContext";
import { Toaster } from "sonner";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster richColors duration={2500} />
      <ThemeProvider>
        <CartProvider>
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
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
