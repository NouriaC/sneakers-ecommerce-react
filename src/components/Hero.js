import "./Hero.css";
import { Link } from "react-router-dom";
import heroImgOne from "../assets/home-photo-1.jpeg";
import heroImgTwo from "../assets/home-photo-2.jpeg";

const Hero = () => {
  return (
    <section className="section-center hero">
      <article className="hero-content">
        <h1>
          the home of <br />
          fashionable sneakers
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to="/collections" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroImgOne} alt="basket ball" className="main-img" />
        <img src={heroImgTwo} alt="pair of sneakers" className="accent-img" />
      </article>
    </section>
  );
};

export default Hero;
