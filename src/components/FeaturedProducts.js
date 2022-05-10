import "./FeaturedProducts.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const FeaturedProducts = () => {
  const { products } = useGlobalContext();
  return (
    <section className="section featured-products">
      <h2 className="title">sneakers of the month</h2>
      <div className="section-center featured">
        {products.slice(0, 3).map((product) => {
          return <Product key={product._id} {...product} />;
        })}
      </div>
      <Link to="/collections" className="btn featured-btn">
        {" "}
        all sneakers
      </Link>
    </section>
  );
};

export default FeaturedProducts;
