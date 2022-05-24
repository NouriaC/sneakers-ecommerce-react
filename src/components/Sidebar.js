import "./Sidebar.css";
import { links } from "../data";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../context/global_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-container open-sidebar" : "sidebar-container"
      }`}
    >
      <div className={`${isSidebarOpen ? "sidebar open-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} alt="brand logo" className="logo" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <IoClose />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
