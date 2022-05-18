import PageHero from "../components/PageHero";
import Search from "../components/Search";
import Product from "../components/Product";
import { useGlobalContext } from "../context";

const CollectionsPage = () => {
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
  if (products.length < 1) {
    return (
      <h2 className=" page-100 section-center">
        no sneakers matched your search
      </h2>
    );
  }
  return (
    <main>
      <PageHero title="products" />
      <div className="page">
        <div className="section-center products">
          <Search products={products} />
          <section className="products-container">
            {products.map((product) => {
              return <Product key={product._id} {...product} />;
            })}
          </section>
        </div>
      </div>
    </main>
  );
};

export default CollectionsPage;
