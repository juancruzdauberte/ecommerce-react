import { Navbar } from "./components/layouts/Navbar/Navbar";
import { Footer } from "./components/layouts/Footer/Footer";
import { ProductCard } from "./components/common/productCard/ProductCard";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
const App = () => {
  return (
    <>
      <header id="header">
        <Navbar />
      </header>
      <main id="main">
        <ItemListContainer saludo="Saludo enviado desde las props" />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};

export default App;
