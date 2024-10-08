import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop.js";
import Navbar from "./components/Navbar.js";
import MobileNavbar from "./components/Navbar--Mobile.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Menu from "./pages/Menu.js";
import Catering from "./pages/Catering.js";

function App() {
  return (
    <div className="App text-gray-primary text-sm md:text-base lg:text-lg xl:text-xl">
      <Router>
        <ScrollToTop />
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/catering' element={<Catering />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
