import React from "react";

import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";



function Reversibles({ carrera }) {
  return (
    <>
      <div className="card mt-2">
        <div className="card-header fs-4 p-1 bg-warning bg-gradient text-dark fw-bold">REVERSIBLES</div>
        <div className="card-body bg-black p-0 fs-3">
        
         
        <table className="table table-dark table-striped m-0" width="100%">
          <tbody>
            <tr>
              <td>
                <img src={btn_1} className="btn_exactas" alt="Logo" />
                <img src={btn_2} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible12).toFixed(2)}</span>      
              </td>
              

              <td>
                <img src={btn_1} className="btn_exactas" alt="Logo" />
                <img src={btn_3} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible13).toFixed(2)}</span>      
                
              </td>

              <td>
                <img src={btn_1} className="btn_exactas" alt="Logo" />
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible14).toFixed(2)}</span>      
                
              </td>

              <td>
                <img src={btn_1} className="btn_exactas" alt="Logo" />
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible15).toFixed(2)}</span>      
                
              </td>

              <td>
                <img src={btn_1} className="btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible16).toFixed(2)}</span>      
                
              </td>
            </tr>

            <tr>
              <td>
                <img src={btn_2} className="btn_exactas" alt="Logo" />
                <img src={btn_3} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible23).toFixed(2)}</span>      
              </td>
              

              <td>
                <img src={btn_2} className="btn_exactas" alt="Logo" />
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible24).toFixed(2)}</span>      
                
              </td>

              <td>
                <img src={btn_2} className="btn_exactas" alt="Logo" />
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible25).toFixed(2)}</span>      
                
              </td>

              <td>
                <img src={btn_2} className="btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible26).toFixed(2)}</span>      
                
              </td>

              <td>
                <img src={btn_3} className="btn_exactas" alt="Logo" />
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible34).toFixed(2)}</span>      
                
              </td>
            </tr>

            <tr>
              <td>
                <img src={btn_3} className="btn_exactas" alt="Logo" />
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible35).toFixed(2)}</span>      
              </td>
              

              <td>
                <img src={btn_3} className="btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible36).toFixed(2)}</span>      
                
              </td>

              <td>
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible45).toFixed(2)}</span>      
                
              </td>

              <td>
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible46).toFixed(2)}</span>      
                
              </td>

              <td>
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{Number(carrera.reversible56).toFixed(2)}</span>      
                
              </td>
            </tr>

          </tbody>

        </table>




        <table className="table table-dark table-sm table-striped m-0 d-none" width="100%">
        <tbody>

          <tr>
            <td>
            <div className="d-flex align-items-center">
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span> 
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />                
                <span className="ms-1 me-1">{carrera.reversible12}</span>      
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_3} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span> 
                <img src={btn_3} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible13}</span>
                
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span> 
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible14}</span>
                
              </div>

            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span> 
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible15}</span>
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span> 
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <img src={btn_1} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible16}</span>                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_3} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span> 
                <img src={btn_3} className="btn_exactas" alt="Logo" />
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible23}</span>                
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span>
                <img src={btn_4} className="btn_exactas" alt="Logo"/>
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo"/>
                <span className="ms-1 me-1">{carrera.reversible24}</span>
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span>
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible25}</span>
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span>
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <img src={btn_2} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible26}</span>
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_3} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span>
                <img src={btn_4} className="btn_exactas" alt="Logo" />
                <img src={btn_3} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible34}</span>
                
              </div>
            </td>
          </tr>
          <tr>
            <td> 
              <div className="d-flex align-items-center">
                <img src={btn_3} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span>
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <img src={btn_3} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible35}</span>
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_3} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span>
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <img src={btn_3} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible36}</span>
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_4} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span>
                <img src={btn_5} className="btn_exactas" alt="Logo" />
                <img src={btn_4} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible45}</span>
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_4} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span>
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <img src={btn_4} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible46}</span>
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src={btn_5} className="me-0 btn_exactas" alt="Logo" />
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">ó</span>
                <img src={btn_6} className="btn_exactas" alt="Logo" />
                <img src={btn_5} className="me-0 btn_exactas" alt="Logo" />
                <span className="ms-1 me-1">{carrera.reversible56}</span> 
                
              </div>
            </td>
          </tr>


         
          
        </tbody>
      </table>

        </div>
      </div>
      
    </>
  );
}

export default Reversibles;
