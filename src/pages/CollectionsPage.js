import { useState } from "react";
import { products } from "../data";
import PageHero from "../components/PageHero";

const CollectionsPage = () => {
  const [shoes, setShoes] = useState(products);

  return (
    <main>
      <PageHero title="products" />
      <section className="page">
        <div className="product-container">
          {products.map((item) => {
            return <h2>{item.name}</h2>;
          })}
        </div>
      </section>
    </main>
  );
};

export default CollectionsPage;
