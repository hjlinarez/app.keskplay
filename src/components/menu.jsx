import React, { useEffect, useState } from "react";

import swal from "sweetalert";
import FormatNumeric from "./formatNumeric";


function menu({
              urlApi,
              user,
              usersaldo,
              FormLogin,
              cerrarSession,
              resumenVenta,
              configuracion,
              listAnular,
              listPagar,
              ultimasjugadas,
              ticketsPagar,
              pagarTicket,
              jugadas,
              setJugadas,
              anularTicket,
              Procesar,              
              myticketConsulta,
              setMyticketConsulta,
              ConsultarTicket,
              SeleccionarTicket

}) {

  

  

  
  

  
  


  



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href=".">
            KENO
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
                aria-label="Search"
                placeholder="Indique el ticket"
                value = { myticketConsulta }
                onChange={e => setMyticketConsulta(e.target.value)}                
              />
              <button
                className="btn btn-primary"
                id="btn_buscar"
                type="button"
                onClick={() => SeleccionarTicket()}
              >
                Buscar
              </button>

              
            </form>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li
              className={
                user.name
                  ? "nav-item dropdown "
                  : "nav-item dropdown visually-hidden"
              }
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name}{" "}
                
                  <span className="fw-bold">(<FormatNumeric monto = { usersaldo.monto }/> { usersaldo.moneda })</span>
                
              </a>

              <ul className="dropdown-menu ">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => resumenVenta()}
                  >
                    <i className="fa-solid fa-chart-simple"></i> Ventas
                  </a>
                </li>

               

               

                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-users-gear"></i> Perfil delUsuario
                  </a>
                </li>

                

                

                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => cerrarSession()}
                  >
                    <i className="fa-solid fa-door-closed"></i> Cerrar
                  </a>
                </li>
              </ul>
            </li>

            <li
              className={
                user.name
                  ? "nav-item dropdown visually-hidden"
                  : "nav-item dropdown "
              }
            >
              <a className="nav-link" href="#" onClick={FormLogin}>
                Ingresar
              </a>
            </li>
          </ul>
        </div>
      </nav>



      

      <div
        className="modal fade"
        id="ConsultarTicketModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="ConsultarTicketModalpLabel"
        aria-hidden="true"
      >

        

      </div>
    </>
  );
}

export default menu;
