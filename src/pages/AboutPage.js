import PageHero from "../components/PageHero";
import aboutImg from "../assets/about-image.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <section className="page section section-center about">
        <img
          src={aboutImg}
          alt="basketball players wearing sneakers"
          className="about-img"
        />
        <article>
          <h2>Our story</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
