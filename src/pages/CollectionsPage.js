import { products } from "../data";
import PageHero from "../components/PageHero";
import Search from "../components/Search";
import Product from "../components/Product";

const CollectionsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <div className="page">
        <div className="section-center products">
          <Search />
          <section className="products-container">
            {products.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </section>
        </div>
      </div>
    </main>
  );
};

export default CollectionsPage;
