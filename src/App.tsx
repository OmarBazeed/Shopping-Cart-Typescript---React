import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Store from "./components/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import ShoppingCartProvider from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
