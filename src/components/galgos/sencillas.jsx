import React, { useState, useEffect } from "react";

import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";

function Sencillas({ ejemplares }) {
  
  return (
    <>
      <div className="card">
        <div className="card-header fs-4 p-1 bg-warning bg-gradient text-dark fw-bold">GANADOR</div>
        <div className="card-body m-0 p-0 fs-3">
          <table
            className="table table-dark table-sm table-striped m-0 "
            width="100%"
          >
            <thead>
              <tr>
                
                <th></th>
                <th>Ranking</th>
                
                
                <th>Win</th>
                <th>Place</th>
                <th>Show</th>
              </tr>
            </thead>
            <tbody>
              {ejemplares.map((valor, index) => (
                <tr key={index}>
                  <td>
                    <img
                                          src={
                                            index == 0
                                              ? btn_1
                                              : index == 1
                                              ? btn_2
                                              : index == 2
                                              ? btn_3
                                              : index == 3
                                              ? btn_4
                                              : index == 4
                                              ? btn_5
                                              : index == 5
                                              ? btn_6
                                              : ""
                                          }
                                          className="btn_exactas"
                                        />
                  </td>
                  
                  
                  <td>{valor.Agresividad}</td>
                  
                  <td>{Number(valor.Win).toFixed(2)}</td>
                  <td>{Number(valor.Place).toFixed(2)}</td>
                  <td>{Number(valor.Show).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Sencillas;
