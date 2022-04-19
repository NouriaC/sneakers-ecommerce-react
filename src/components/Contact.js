import "./Contact.css";

const Contact = () => {
  return (
    <section className="section section-center">
      <h3>
        subscribe to our newsletter and get{" "}
        <span className="contact-discount">15%</span> off
      </h3>
      <div className="contact-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <form
          action="https://formspree.io/f/xvolzjrp"
          className="contact-form"
          method="POST"
        >
          <input
            type="email"
            className="form-input"
            placeholder="enter email"
            name="_replyto"
          />
          <button type="submit" className="btn submit-btn">
            subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
