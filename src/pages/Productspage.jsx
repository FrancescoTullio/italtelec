import { useRef, useEffect } from 'react';
import useProducts from "../hook/useProducts.js";
import CardProduct from "../components/CardProduct.jsx";
import Loding from "../components/Loding.jsx";

function Productspage() {
  const { 
    products, 
    metadata, 
    currentPage, 
    setCurrentPage, 
    searchTerm,
    setSearchTerm,
    isLoading 
  } = useProducts();
  const titleRef = useRef(null);

  // Scroll in alto quando cambia la pagina
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className="container my-5">
      <h1 ref={titleRef} className="text-center mb-4">Catalogo Prodotti</h1>
      
      {/* Barra di ricerca */}
      <div className="mb-4">
        <input 
          type="text"
          className="form-control"
          placeholder="Cerca prodotti per nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Risultati trovati: {metadata.totalObjects || 0}</h3>
        {metadata.totalPages > 0 && (
          <span className="text-muted">
            Pagina {currentPage} di {metadata.totalPages}
          </span>
        )}
      </div>

      {/* Messaggio se non ci sono prodotti */}
      {products.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          <h4>Nessun prodotto trovato</h4>
          <p>Prova a modificare i criteri di ricerca</p>
        </div>
      ) : (
        <>
          <div className="row justify-content-center">
            {products.map((product) => (
              <div key={product.id} className="col-lg-6 col-md-12">
                <CardProduct product={product} />
              </div>
            ))}
          </div>

          {/* Controlli di paginazione */}
          {metadata.totalPages > 1 && (
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
          )}
        </>
      )}
    </div>
  );
}

export default Productspage;