function Footer( { zoom, setZoom, cerrarSession }) {
  
  return (
    <>
      <nav className="navbar fixed-bottom navbar-expand-lg">
        <div className="container-fluid ">
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
            <ul className="navbar-nav text-end">
              <li className="nav-item">
                  <a href="."  className="btn btn-sucess"><i className="fa-solid fa-home"></i></a>                            
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sucess"
                  onClick={() => setZoom(Number(zoom) - 0.1)}
                >
                  <i className="fa-solid fa-magnifying-glass-minus"></i>
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sucess"
                  onClick={() => setZoom(Number(zoom) + 0.1)}
                >
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </button>
              </li>
              <li className="nav-item">
                <a href="#" onClick= { () => window.location.reload() } className="btn btn-sucess"><i className="fa-solid fa-arrows-rotate"></i></a>                            
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sucess"
                  onClick={() => cerrarSession()}
                >
                  <i className="fa-solid fa-door-open"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Footer;
