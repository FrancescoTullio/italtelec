import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header className="p-1">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#e3f2fd" }}
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* CORREZIONE 1: Usa Link per il brand e correggi il percorso immagine */}
          <Link className="navbar-brand" to="/"> 
            <img
              src="/logo_footer.png" // Ho rimosso 'public\' e usato '/'
              alt="Logo"
              className="navbar-logo"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* CORREZIONE 2: Usa solo Link e applica le classi Bootstrap direttamente */}
                <Link className="nav-link active" aria-current="page" to="/"> 
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* CORREZIONE 3: Usa solo Link e applica le classi Bootstrap direttamente */}
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;