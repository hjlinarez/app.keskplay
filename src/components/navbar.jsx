

function navbar({ user, urlApi, cerrarSession }) {


  



  const resumenventa = () => {
    $('#ResumenVentaModal').modal('show')
  }



 




  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Keno 4min
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                id="idticketbuscar"
              />
              <button className="btn btn-primary" type="button">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className={user.name ? 'nav-item dropdown ' : 'nav-item dropdown visually-hidden'}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name}{' '}
                <span className="badge bg-primary">
                  ({usersaldo.monto} {usersaldo.moneda})
                </span>{' '}
              </a>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#" onClick={() => resumenventa()}>
                    Ventas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Movimientos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => cerrarSession()}>
                    Cerrar Session
                  </a>
                </li>
              </ul>
            </li>
            <li className={user.name ? 'nav-item dropdown visually-hidden' : 'nav-item dropdown '}>
              <a className="nav-link" href="#" onClick={FormLogin}>
                Ingresar
              </a>
            </li>
          </ul>
        </div>
      </nav>


      


    </div>
  )
}

export default navbar
