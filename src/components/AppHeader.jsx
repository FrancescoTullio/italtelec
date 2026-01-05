import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header className="shadow-sm sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/logo_footer.png"
              alt="Italtelec Logo"
              height="60"
              className="d-inline-block align-top me-2"
            />
            <span className="fw-bold text-primary fs-4 d-none d-md-inline">Italtelec</span>
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link px-3 fw-semibold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 fw-semibold" to="/products">
                  Prodotti
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 fw-semibold" to="/contact">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;