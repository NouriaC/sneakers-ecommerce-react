import "./Navbar.css";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";
import { links } from "../data";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/global_context";
import { useCartContext } from "../context/cart_context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const { total_items } = useCartContext();
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-menu">
            <button className="nav-toggle" onClick={openSidebar}>
              <FaBars />
            </button>
            <img src={logo} alt="logo" />
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-cart">
            <Link to="/cart" className="nav-cart-btn">
              <span className="cart-container">
                <IoCartOutline />
                <span className="cart-value">{total_items}</span>
              </span>
            </Link>
            <img src={avatar} className="avatar" alt="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
