import "./Navbar.css";
import logo from "../logo.svg";
import avatar from "../assets/image-avatar.png";
import { links } from "../data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-menu">
            <button className="nav-toggle">
              <FaBars />
            </button>
            <img src={logo} alt="logo" />
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-cart">
            <button className="nav-cart-btn">
              <AiOutlineShoppingCart />
            </button>
            <img src={avatar} className="avatar" alt="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
