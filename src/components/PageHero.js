import { Link } from "react-router-dom";
import "./PageHero.css";

const PageHero = ({ title, product }) => {
  return (
    <section className="page-hero-section">
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/collections">/ Products</Link>}/ {title}
        </h3>
      </div>
    </section>
  );
};

export default PageHero;
