import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

function AppFooter() {
  return <footer className="bg-dark text-white pt-5 pb-4 mt-5">

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
            <li>amplificatori  RF</li>
            <li>Prototipaggio</li>
            <li>Assistenza </li>
            <li>Consulenza tecnica</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contatti</h4>
          <ul className="footer-links">
            <li>
              <a href="https://wa.me/393333333" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp style={{ marginRight: '8px', color: '#25D366' }} /> +39 3333333
              </a>
            </li>
            <li>📧 Italtelec@outlook.it</li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook style={{ marginRight: '8px' }} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ marginRight: '8px' }} /> Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Orari</h4>
          <ul className="footer-links">
            <li>Lun-Ven: 8:00 - 20:00</li>
            <li>Sabato: 9:00 - 18:00</li>
            <li>Domenica: Su appuntamento</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Italtelec  Tutti i diritti riservati.</p>
      </div>
    </div>

  </footer>;
}

export default AppFooter;
