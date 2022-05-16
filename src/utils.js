// api where we fetch the products
export const products_url =
  "https://sneakers-pdts-api.herokuapp.com/api/v1/products";

// function to format the price
export const formatPrice = (num) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(num / 100);
};
