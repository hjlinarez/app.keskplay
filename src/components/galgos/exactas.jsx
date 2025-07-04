import React from "react";

import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";

function Exactas({ carrera }) {
  return (
    <>
      <div className="card">
        <div className="card-header fs-4 p-1 bg-warning bg-gradient text-dark fw-bold">APUESTAS EXACTAS</div>
        <div className="card-body m-0 p-0 fs-3 ">
          <table
            className="table table-sm table-striped table-dark table-galgos m-0"
            width="100%"
          >
            <thead>
            <tr>
                <th></th>
                <th>
                  <img src={btn_1} className="btn_exactas" alt="Logo" />
                </th>
                <th>
                  <img src={btn_2} className="btn_exactas" alt="Logo" />
                </th>
                <th>
                  <img src={btn_3} className="btn_exactas" alt="Logo" />
                </th>
                <th>
                  <img src={btn_4} className="btn_exactas" alt="Logo" />
                </th>
                <th>
                  <img src={btn_5} className="btn_exactas" alt="Logo" />
                </th>
                <th>
                  <img src={btn_6} className="btn_exactas" alt="Logo" />
                </th>
              </tr>
            </thead>
            <tbody>
              

              <tr>
                <td>
                  <img src={btn_1} className="btn_exactas" alt="Logo" />
                </td>
                <td>{carrera.exacta11}</td>
                <td>{carrera.exacta12}</td>
                <td>{carrera.exacta13}</td>
                <td>{carrera.exacta14}</td>
                <td>{carrera.exacta15}</td>
                <td>{carrera.exacta16}</td>
              </tr>

              <tr>
                <td>
                  <img src={btn_2} className="btn_exactas" alt="Logo" />
                </td>
                <td>{carrera.exacta21}</td>
                <td>{carrera.exacta22}</td>
                <td>{carrera.exacta23}</td>
                <td>{carrera.exacta24}</td>
                <td>{carrera.exacta25}</td>
                <td>{carrera.exacta26}</td>
              </tr>

              <tr>
                <td>
                  <img src={btn_3} className="btn_exactas" alt="Logo" />
                </td>
                <td>{carrera.exacta31}</td>
                <td>{carrera.exacta32}</td>
                <td>{carrera.exacta33}</td>
                <td>{carrera.exacta34}</td>
                <td>{carrera.exacta35}</td>
                <td>{carrera.exacta36}</td>
              </tr>

              <tr>
                <td>
                  <img src={btn_4} className="btn_exactas" alt="Logo" />
                </td>
                <td>{carrera.exacta41}</td>
                <td>{carrera.exacta42}</td>
                <td>{carrera.exacta43}</td>
                <td>{carrera.exacta44}</td>
                <td>{carrera.exacta45}</td>
                <td>{carrera.exacta46}</td>
              </tr>

              <tr>
                <td>
                  <img src={btn_5} className="btn_exactas" alt="Logo" />
                </td>
                <td>{carrera.exacta51}</td>
                <td>{carrera.exacta52}</td>
                <td>{carrera.exacta53}</td>
                <td>{carrera.exacta54}</td>
                <td>{carrera.exacta55}</td>
                <td>{carrera.exacta56}</td>
              </tr>

              <tr>
                <td>
                  <img src={btn_6} className="btn_exactas" alt="Logo" />
                </td>
                <td>{carrera.exacta61}</td>
                <td>{carrera.exacta62}</td>
                <td>{carrera.exacta63}</td>
                <td>{carrera.exacta64}</td>
                <td>{carrera.exacta65}</td>
                <td>{carrera.exacta66}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Exactas;
