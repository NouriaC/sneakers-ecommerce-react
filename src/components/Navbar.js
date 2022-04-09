import "./Navbar.css";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";
import { links } from "../data";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
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
            <button className="nav-cart-btn">
              <IoCartOutline />
            </button>
            <img src={avatar} className="avatar" alt="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
