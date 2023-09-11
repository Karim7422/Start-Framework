import "./App.css";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import Portfolio from "./Components/pages/Portfolio";
import Footer from "./Components/ui/Footer";
import Navbar from "./Components/ui/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename="Start-Framework">
      <Navbar />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
