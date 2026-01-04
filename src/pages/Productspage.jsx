import useProducts from "../hook/useProducts.js";

function Productspage() {
  const products = useProducts();
  console.log(products);
  return (
    <div>
      <h1>Products Page</h1>
      <p>Welcome to the Products page!</p>
    </div>
  );
}

export default Productspage;
