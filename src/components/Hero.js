import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="section-center hero">
      <article className="content">
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
      <article></article>
    </section>
  );
};

export default Hero;
