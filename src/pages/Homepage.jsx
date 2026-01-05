import Carousel from "../components/Carousel.jsx";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* Carousel */}
      <Carousel />

      {/* Sezione Chi Siamo */}
      <section className="container my-5 py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold text-primary mb-4">Chi Siamo</h2>
            <p className="lead text-muted mb-3">
              <strong>Italtelec</strong> è leader nel settore della modulazione RF e delle soluzioni broadcast professionali.
            </p>
            <p className="text-muted">
              Con anni di esperienza nel settore, offriamo amplificatori RF di alta qualità, 
              servizi di prototipaggio e consulenza tecnica specializzata. Il nostro team di esperti 
              è sempre pronto ad assistere i clienti con soluzioni su misura.
            </p>
            <Link to="/products" className="btn btn-primary btn-lg mt-3">
              <i className="bi bi-arrow-right-circle me-2"></i>Scopri i Nostri Prodotti
            </Link>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop" 
              alt="Tecnologia RF" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '350px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Sezione Servizi */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">I Nostri Servizi</h2>
            <p className="lead text-muted">Soluzioni complete per ogni esigenza broadcast</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-broadcast-pin display-4 text-primary"></i>
                </div>
                <h5 className="fw-bold">Amplificatori RF</h5>
                <p className="text-muted">Amplificatori ad alta potenza per ogni applicazione broadcast</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-cpu display-4 text-primary"></i>
                </div>
                <h5 className="fw-bold">Prototipaggio</h5>
                <p className="text-muted">Sviluppo di prototipi personalizzati su specifiche del cliente</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-tools display-4 text-primary"></i>
                </div>
                <h5 className="fw-bold">Assistenza Tecnica</h5>
                <p className="text-muted">Supporto tecnico qualificato e manutenzione specializzata</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-clipboard-data display-4 text-primary"></i>
                </div>
                <h5 className="fw-bold">Consulenza</h5>
                <p className="text-muted">Consulenza tecnica per l'ottimizzazione dei sistemi RF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione CTA */}
      <section className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <div className="card bg-primary text-white border-0 shadow-lg">
              <div className="card-body text-center py-5">
                <h2 className="display-6 fw-bold mb-3">Hai bisogno di una soluzione RF personalizzata?</h2>
                <p className="lead mb-4">Contattaci per una consulenza gratuita</p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a href="tel:+390765481633" className="btn btn-light btn-lg">
                    <i className="bi bi-telephone-fill me-2"></i>Chiamaci
                  </a>
                  <a href="mailto:italtelec_international@italint.com" className="btn btn-outline-light btn-lg">
                    <i className="bi bi-envelope-fill me-2"></i>Scrivici
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;