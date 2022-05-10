import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="page-100 error-section">
      <div>
        <h1>404</h1>
        <h3>Sorry, the page you looked for cannot be found...</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
