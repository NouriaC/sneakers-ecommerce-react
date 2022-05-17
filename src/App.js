import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Home, Collections, SingleProduct, About, Error, Cart } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/collections"} element={<Collections />} />
        <Route path={"/collections/:id"} element={<SingleProduct />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
