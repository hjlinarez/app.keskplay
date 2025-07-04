import React from "react";
import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";

function Ranking({ ejemplares }) {
  return (
    <>
      <div className="card">
        <div className="card-header fs-4 p-1 bg-warning bg-gradient text-dark fw-bold">GALGOS</div>
        <div className="card-body m-0 p-0 fs-3">
          <table className="table table-dark table-sm table-striped m-0 w-100">
            <thead>
              <tr>
                <th>Ranking</th>                
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ejemplares.map((valor, index) => (
                <tr key={index}>
                  <th>
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
                  </th>
                  
                  <td>{valor.Agresividad}</td>
                  
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Ranking;
