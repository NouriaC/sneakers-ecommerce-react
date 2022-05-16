import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { products_url as url, formatPrice } from "../utils";
import PageHero from "../components/PageHero";
import Ratings from "../components/Ratings";
import AddToCart from "../components/AddToCart";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, error, fetchSingleProduct, singleProduct } =
    useGlobalContext();

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [navigate, error]);

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
  const {
    name,
    price,
    description,
    imgURL,
    rating,
    reviews,
    _id: sku,
  } = singleProduct;

  return (
    <section>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/collections" className="btn">
          back to all shoes{" "}
        </Link>
        <div className="product-center">
          <img src={imgURL} alt={name} className="single-img" />
          <section className="content">
            <h2>{name}</h2>
            <Ratings rating={rating} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Available : </span>
              In Stock
            </p>
            <hr />
            <AddToCart singleProduct={singleProduct} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
