import { useState } from 'react';

function Contactpage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    // Crea il link mailto con i dati del form
    const mailtoLink = `mailto:italtelec_international@italint.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`
    )}`;
    
    // Apre il client email predefinito
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Contattaci</h1>
      
      <div className="row">
        {/* Informazioni di contatto */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title mb-4">I Nostri Contatti</h3>
              
              <div className="mb-3">
                <h5>📍 Indirizzo</h5>
                <p className="text-muted">Via Tiberina, 49 - Fiano Romano (RM)</p>
              </div>
              
              <div className="mb-3">
                <h5>📞 Telefono</h5>
                <p className="text-muted">
                  <a href="tel:+390765481633" className="text-decoration-none">
                    +39 0765 481633
                  </a>
                </p>
              </div>
              
              <div className="mb-3">
                <h5>📧 Email</h5>
                <p className="text-muted">
                  <a href="mailto:italtelec_international@italint.com" className="text-decoration-none">
                    italtelec_international@italint.com
                  </a>
                </p>
              </div>
              
              <div className="mb-3">
                <h5>💬 WhatsApp</h5>
                <p className="text-muted">
                  <a href="https://wa.me/390765481633" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    0765 481633
                  </a>
                </p>
              </div>
              
              <div className="mb-3">
                <h5>📱 Facebook</h5>
                <p className="text-muted">
                  <a href="https://www.facebook.com/profile.php?id=100057047636927" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    Seguici su Facebook
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form di contatto */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title mb-4">Inviaci un Messaggio</h3>
              
              <div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nome *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Oggetto *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Messaggio *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button onClick={handleSubmit} className="btn btn-primary w-100">
                  Invia Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;