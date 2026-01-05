import useProducts from "../hook/useProducts.js";
import CardProduct from "../components/CardProduct.jsx";
import Loding from "../components/Loding.jsx";

function Productspage() {
  const {products, metadata} = useProducts();
  console.log(products);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Catalogo Prodotti</h1>
      
      {/* Logica Ternaria:
        1. Se 'isProductsLoaded' è VERO, esegue il map e visualizza le CardProduct.
        2. Altrimenti (FALSO), visualizza il componente Loding.
      */}
      {Array.isArray(products) && products.length > 0 ? (
        <>
        <div>
          <h3>risultati trovati : {metadata.totalObjects}</h3>
        </div>
         <div className="row justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col-lg-6 col-md-12">
              <CardProduct product={product} />
            </div>
          ))}
        </div>
        </>
       
      ) : (
        <Loding />
      )}

    </div>
  );
}

export default Productspage;