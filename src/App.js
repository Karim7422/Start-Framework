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
    <BrowserRouter >
      <Navbar />
      <main>
        <Routes>
          <Route index path="/Start-Framework" element={<Home />} />
          <Route path="/Start-Framework/about" element={<About />} />
          <Route path="/Start-Framework/portfolio" element={<Portfolio />} />
          <Route path="/Start-Framework/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
