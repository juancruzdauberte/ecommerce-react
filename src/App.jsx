import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from "./components/pages/contacto/Contacto";
import { QuienesSomos } from "./components/pages/quienesSomos/QuienesSomos";
import { Home } from "./components/pages/home/Home";
import { Cart } from "./components/pages/cart/Cart";
import { ProductDetail } from "./components/pages/productDetail/ProductDetail";
import { Checkout } from "./components/pages/checkout/Checkout";
import { CartProvider } from "./components/context/CartContext";
import { ThemeProvider } from "./components/context/ThemeContext";
import { Toaster } from "sonner";
import { ProductList } from "./components/pages/productList/ProductList";
import { Header } from "./components/layouts/header/Header";
import { FooterContainer } from "./components/layouts/footerContainer/FooterContainer";
import { AuthProvider } from "./components/context/AuthContext";
import { ProtectedRoutes } from "./components/config/ProtectedRoutes";
import { Login } from "./components/pages/login/Login";
import { MyAccount } from "./components/pages/myAccount/MyAccount";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster richColors duration={2500} />
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<Home />} />
                {/* Productos */}
                <Route path="/products" element={<ProductList />} />
                <Route
                  path="/products/category/:categoryName"
                  element={<ProductList />}
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

                <Route path="/account" element={<MyAccount />} />
              </Route>
            </Routes>
            <FooterContainer />
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
