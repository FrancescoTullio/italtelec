import useProducts from "../hook/useProducts.js";
import CardProduct from "../components/CardProduct.jsx";
import Loding from "../components/Loding.jsx";

function Productspage() {
  const { products, metadata, currentPage, setCurrentPage, isLoading } = useProducts();

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Catalogo Prodotti</h1>
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Risultati trovati: {metadata.totalObjects}</h3>
        <span className="text-muted">
          Pagina {currentPage} di {metadata.totalPages}
        </span>
      </div>

      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-lg-6 col-md-12">
            <CardProduct product={product} />
          </div>
        ))}
      </div>

      {/* Controlli di paginazione */}
      <div className="d-flex justify-content-center gap-2 mt-4">
        <button 
          className="btn btn-primary"
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          Precedente
        </button>
        
        {[...Array(metadata.totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`btn ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        
        <button 
          className="btn btn-primary"
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === metadata.totalPages}
        >
          Successiva
        </button>
      </div>
    </div>
  );
}

export default Productspage;