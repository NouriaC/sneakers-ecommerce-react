import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <h5>
        &copy; {new Date().getFullYear()}
        <span> SNEAKERS</span>
      </h5>
      <h5> All rights reserved</h5>
    </section>
  );
};

export default Footer;
