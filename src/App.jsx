import { Navbar } from "./components/layouts/Navbar/Navbar";
import { Footer } from "./components/layouts/Footer/Footer";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <header id="header">
        <Navbar />
      </header>
      <main id="main">
        <ItemListContainer />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};

export default App;
