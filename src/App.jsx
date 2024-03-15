import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Home, Products } from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
