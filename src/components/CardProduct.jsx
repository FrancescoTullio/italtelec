import { Link } from "react-router-dom";


function CardProduct({ product }) {
  const { dimensioni, imagepath, immagine, nome, peso, potenza_watt, prezzo, range_frequenza, specifiche, id } = product;

  // Determina il percorso dell'immagine: usa 'imagepath' se presente, altrimenti 'immagine', 
  // oppure una fallback se entrambi non sono definiti o sono vuoti.
  const imageSource = imagepath || immagine || "https://via.placeholder.com/150?text=No+Image";

  // Aggiungiamo una formattazione semplice per 'specifiche' se è un array di stringhe
  const renderSpecifiche = Array.isArray(specifiche)
    ? specifiche.map((spec, index) => <li key={index}>{spec}</li>)
    : specifiche; // Rende la variabile così com'è se non è un array

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">

        {/* Colonna per l'immagine */}
        <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
          {/* L'attributo 'src' è aggiornato per usare l'immagine del prodotto */}
          {/* Nota: è consigliabile usare 'imageSource' come fallback, ma si assume che 'imagepath' o 'immagine' siano il percorso corretto */}
          <img src={imageSource} className="img-fluid rounded-start" alt={`Immagine di ${nome}`} style={{ maxHeight: '100%', objectFit: 'contain' }} />
        </div>

        {/* Colonna per il corpo della card */}
        <div className="col-md-8">
          <div className="card-body">

            {/* Titolo (nome del prodotto) */}
            <h5 className="card-title text-primary">{nome}</h5>

            {/* Prezzo in grassetto */}
            <h4 className="card-subtitle mb-2 text-danger">
              **€ {prezzo}**
            </h4>

            <hr className="my-2" />

            {/* Dettagli tecnici in una lista non ordinata */}
            <p className="card-text">
              **Dettagli Tecnici:**
              <ul className="list-unstyled small">
                <li>**Dimensioni:** {dimensioni}</li>
                <li>**Peso:** {peso}</li>
                <li>**Potenza (Watt):** {potenza_watt}</li>
                <li>**Range Frequenza:** {range_frequenza}</li>
              </ul>
            </p>

            {/* Specifiche (come lista o blocco di testo) */}
            <p className="card-text mt-3">
              **Specifiche Principali:**
              {Array.isArray(specifiche) ? (
                <ul className="list-group list-group-flush small">
                  {renderSpecifiche}
                </ul>
              ) : (
                <span className="d-block small">{renderSpecifiche}</span>
              )}
            </p>

            {/* Link al dettaglio del prodotto */}
            <Link to={`/products/${id}`} className="btn btn-primary">
              Dettagli
            </Link>

            {/* Esempio di testo secondario, mantenuto per riferimento */}
            <p className="card-text">
              <small className="text-body-secondary">Codice Immagine: {immagine || 'N/D'}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;