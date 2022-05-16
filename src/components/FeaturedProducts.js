import "./FeaturedProducts.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const FeaturedProducts = () => {
  const { products, isLoading, error } = useGlobalContext();

  if (isLoading) {
    return <div className="loading page-100 section-center">Loading...</div>;
  }
  if (error) {
    return (
      <div className="loading page-100 section-center">
        There was an error...
      </div>
    );
  }

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
