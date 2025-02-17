import { Navbar } from "./components/layouts/Navbar/Navbar";
import { Footer } from "./components/layouts/Footer/Footer";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Inicio */}
        <Route path="/" element={<ItemListContainer />} />
        {/* Productos */}
        <Route path="/productos" element={<ItemListContainer />} />
        {/* Contacto */}
        <Route path="/contacto" />
        {/* Quienes somos */}
        <Route path="/quienes_somos" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
