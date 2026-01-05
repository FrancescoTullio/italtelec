import { useState, useEffect } from 'react';
import '../css-component/antennaDettail.css';
import { useParams } from 'react-router-dom';

function Detailpage() {
  const [antenna, setAntenna] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const antennaId = id;



  useEffect(() => {

    if (antennaId) {
      fetchAntenna();
    } else {

      setLoading(false);
      setError('ID antenna non specificato');
    }
  }, [antennaId]);

  const fetchAntenna = async () => {

    setLoading(true);
    setError(null);

    try {
      const url = `http://italtelecback2.vercel.app/italtelec/${antennaId}`;
      const response = await fetch(url);


      if (!response.ok) {
        throw new Error('Antenna non trovata');
      }

      const data = await response.json();

      setAntenna(data);
    } catch (err) {

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="antenna-detail-container">
        <div className="antenna-loading-container">
          <div className="antenna-spinner"></div>
          <p className="antenna-loading-text">Caricamento in corso...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="antenna-detail-container">
        <div className="antenna-error-card">
          <svg className="antenna-error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="antenna-error-title">Errore</h2>
          <p className="antenna-error-message">{error}</p>
          <button className="antenna-retry-button" onClick={fetchAntenna}>
            Riprova
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="antenna-detail-container">
      {antenna && (
        <div className="antenna-detail-card">
          <div className="antenna-image-section">
            <img
              src={antenna.imagepath || '/placeholder.jpg'}
              alt={antenna.nome}
              className="antenna-detail-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=Immagine+Non+Disponibile';
              }}
            />
          </div>

          <div className="antenna-content-section">
            <div className="antenna-detail-header">
              <h1 className="antenna-detail-title">{antenna.nome}</h1>
              <div className="antenna-price-tag">
                €{parseFloat(antenna.prezzo).toFixed(2)}
              </div>
            </div>

            <div className="antenna-specs-grid">
              <div className="antenna-spec-item">
                <svg className="antenna-spec-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <div className="antenna-spec-label">Range Frequenza</div>
                  <div className="antenna-spec-value">{antenna.range_frequenza}</div>
                </div>
              </div>

              <div className="antenna-spec-item">
                <svg className="antenna-spec-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div>
                  <div className="antenna-spec-label">Potenza</div>
                  <div className="antenna-spec-value">{antenna.potenza_watt} W</div>
                </div>
              </div>

              {antenna.dimensioni && (
                <div className="antenna-spec-item">
                  <svg className="antenna-spec-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <div>
                    <div className="antenna-spec-label">Dimensioni</div>
                    <div className="antenna-spec-value">{antenna.dimensioni}</div>
                  </div>
                </div>
              )}

              {antenna.peso && (
                <div className="antenna-spec-item">
                  <svg className="antenna-spec-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <div>
                    <div className="antenna-spec-label">Peso</div>
                    <div className="antenna-spec-value">{antenna.peso} kg</div>
                  </div>
                </div>
              )}
            </div>

            {antenna.specifiche && (
              <div className="antenna-description-section">
                <h2 className="antenna-description-title">Specifiche Tecniche</h2>
                <p className="antenna-description-text">{antenna.specifiche}</p>
              </div>
            )}

            <div className="antenna-footer">
              <button className="antenna-contact-button">
                Richiedi Informazioni
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detailpage;