import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';

function AppFooter() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="main-logo-icon"><img src="/logo_footer.png" alt="logo" /></span>
              <span className="logo-text">Italtelec</span>
            </div>
            <p className="footer-description">
              Il tuo partner affidabile per la modulazione degli RF.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Servizi</h4>
            <ul className="footer-links">
              <li>Amplificatori RF</li>
              <li>Prototipaggio</li>
              <li>Assistenza</li>
              <li>Consulenza tecnica</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contatti</h4>
            <ul className="footer-links">
              <li>📍 Via Tiberina, 49 - Fiano Romano (RM)</li>
              <li>
                <a href="tel:+390765481633" target="_blank" rel="noopener noreferrer">
                  📞 +39 0765 481633
                </a>
              </li>
              <li>
                <a href="mailto:italtelec_international@italint.com">
                  📧 italtelec_international@italint.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/390765481633" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp style={{ marginRight: '8px', color: '#25D366' }} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100057047636927" target="_blank" rel="noopener noreferrer">
                  <FaFacebook style={{ marginRight: '8px' }} /> Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Orari</h4>
            <ul className="footer-links">
              <li>Lun-Ven: 9:00 - 18:00</li>
              <li>Sabato: Chiuso</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Italtelec - Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;