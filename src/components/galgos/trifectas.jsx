import React from "react";

import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";

function Trifectas({ carrera }) {
  return (
    <>
      <div className="card">
        <div className="card-header h4 text-bg-dark">Trifectas</div>
        <div className="card-body bg-black p-0">


          <div className="row g-0 mb-0">
            <div className="col p-0 mb-0">
              <table className="table table-dark table-sm table-striped m-0">
                <thead>
                <tr>
                    <th>I,II,III</th>
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
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                    </td>
                    <td></td>
                    <td>{carrera.trifecta123}</td>
                    <td>{carrera.trifecta124}</td>
                    <td>{carrera.trifecta125}</td>
                    <td>{carrera.trifecta126}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta132}</td>
                    <td></td>
                    <td>{carrera.trifecta134}</td>
                    <td>{carrera.trifecta135}</td>
                    <td>{carrera.trifecta136}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta142}</td>
                    <td>{carrera.trifecta143}</td>
                    <td></td>
                    <td>{carrera.trifecta145}</td>
                    <td>{carrera.trifecta146}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta152}</td>
                    <td>{carrera.trifecta153}</td>
                    <td>{carrera.trifecta154}</td>
                    <td></td>
                    <td>{carrera.trifecta156}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta162}</td>
                    <td>{carrera.trifecta163}</td>
                    <td>{carrera.trifecta164}</td>
                    <td>{carrera.trifecta165}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col p-0 mb-0">
              <table
                className="table table-dark table-sm table-striped m-0"
                width="100%"
              >
                <thead>
                <tr>
                    <th>I,II,III</th>
                    <th>
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
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
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
                    </td>
                    <td></td>
                    <td>{carrera.trifecta213}</td>
                    <td>{carrera.trifecta214}</td>
                    <td>{carrera.trifecta215}</td>
                    <td>{carrera.trifecta216}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta231}</td>
                    <td></td>
                    <td>{carrera.trifecta234}</td>
                    <td>{carrera.trifecta235}</td>
                    <td>{carrera.trifecta236}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta241}</td>
                    <td>{carrera.trifecta243}</td>
                    <td></td>
                    <td>{carrera.trifecta245}</td>
                    <td>{carrera.trifecta246}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta251}</td>
                    <td>{carrera.trifecta253}</td>
                    <td>{carrera.trifecta254}</td>
                    <td></td>
                    <td>{carrera.trifecta256}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta261}</td>
                    <td>{carrera.trifecta263}</td>
                    <td>{carrera.trifecta264}</td>
                    <td>{carrera.trifecta265}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col p-0 mb-0">
              <table
                className="table table-dark table-sm table-striped m-0"
                width="100%"
              >
                <thead>
                    <tr>
                        <th>I,II,III</th>
                        <th>
                        <img src={btn_1} className="btn_exactas" alt="Logo" />
                        </th>
                        <th>
                        <img src={btn_2} className="btn_exactas" alt="Logo" />
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
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
                    </td>
                    <td></td>
                    <td>{carrera.trifecta312}</td>
                    <td>{carrera.trifecta314}</td>
                    <td>{carrera.trifecta315}</td>
                    <td>{carrera.trifecta316}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta321}</td>
                    <td></td>
                    <td>{carrera.trifecta324}</td>
                    <td>{carrera.trifecta325}</td>
                    <td>{carrera.trifecta326}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta341}</td>
                    <td>{carrera.trifecta342}</td>
                    <td>{carrera.trifecta344}</td>
                    <td>{carrera.trifecta345}</td>
                    <td>{carrera.trifecta346}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta351}</td>
                    <td>{carrera.trifecta352}</td>
                    <td>{carrera.trifecta354}</td>
                    <td>{carrera.trifecta355}</td>
                    <td>{carrera.trifecta356}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta361}</td>
                    <td>{carrera.trifecta362}</td>
                    <td>{carrera.trifecta364}</td>
                    <td>{carrera.trifecta365}</td>
                    <td>{carrera.trifecta366}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row g-0 mb-0 mt-0">
            <div className="col p-0 mb-0">
              <table
                className="table table-dark table-sm table-striped m-0"
                width="100%"
              >
                <thead>
                    <tr>
                    <th>I,II,III</th>
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
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta411}</td>
                    <td>{carrera.trifecta412}</td>
                    <td>{carrera.trifecta413}</td>
                    <td>{carrera.trifecta415}</td>
                    <td>{carrera.trifecta416}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta421}</td>
                    <td>{carrera.trifecta422}</td>
                    <td>{carrera.trifecta423}</td>
                    <td>{carrera.trifecta425}</td>
                    <td>{carrera.trifecta426}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta431}</td>
                    <td>{carrera.trifecta432}</td>
                    <td>{carrera.trifecta433}</td>
                    <td>{carrera.trifecta435}</td>
                    <td>{carrera.trifecta436}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta451}</td>
                    <td>{carrera.trifecta452}</td>
                    <td>{carrera.trifecta453}</td>
                    <td>{carrera.trifecta455}</td>
                    <td>{carrera.trifecta456}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta461}</td>
                    <td>{carrera.trifecta462}</td>
                    <td>{carrera.trifecta463}</td>
                    <td>{carrera.trifecta465}</td>
                    <td>{carrera.trifecta466}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col p-0 mb-0">
              <table
                className="table table-dark table-sm table-striped m-0"
                width="100%"
              >
                <thead>
                    <tr>
                    <th>I,II,III</th>
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
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td>
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta511}</td>
                    <td>{carrera.trifecta512}</td>
                    <td>{carrera.trifecta513}</td>
                    <td>{carrera.trifecta514}</td>
                    <td>{carrera.trifecta516}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta521}</td>
                    <td>{carrera.trifecta522}</td>
                    <td>{carrera.trifecta523}</td>
                    <td>{carrera.trifecta524}</td>
                    <td>{carrera.trifecta526}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta531}</td>
                    <td>{carrera.trifecta532}</td>
                    <td>{carrera.trifecta533}</td>
                    <td>{carrera.trifecta534}</td>
                    <td>{carrera.trifecta536}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta541}</td>
                    <td>{carrera.trifecta542}</td>
                    <td>{carrera.trifecta543}</td>
                    <td>{carrera.trifecta544}</td>
                    <td>{carrera.trifecta546}</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta561}</td>
                    <td>{carrera.trifecta562}</td>
                    <td>{carrera.trifecta563}</td>
                    <td>{carrera.trifecta564}</td>
                    
                    <td>{carrera.trifecta566}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col p-0 mb-0">
              <table
                className="table table-dark table-sm table-striped m-0"
                width="100%"
              >
                <thead>
                    <tr>
                    <th>I,II,III</th>
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
                    
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td>
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                      <img src={btn_1} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta611}</td>
                    <td>{carrera.trifecta612}</td>
                    <td>{carrera.trifecta613}</td>
                    <td>{carrera.trifecta614}</td>
                    <td>{carrera.trifecta615}</td>
                    
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                      <img src={btn_2} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta621}</td>
                    <td>{carrera.trifecta622}</td>
                    <td>{carrera.trifecta623}</td>
                    <td>{carrera.trifecta624}</td>
                    <td>{carrera.trifecta625}</td>
                    
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                      <img src={btn_3} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta631}</td>
                    <td>{carrera.trifecta632}</td>
                    <td>{carrera.trifecta633}</td>
                    <td>{carrera.trifecta634}</td>
                    <td>{carrera.trifecta635}</td>
                    
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                      <img src={btn_4} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta641}</td>
                    <td>{carrera.trifecta642}</td>
                    <td>{carrera.trifecta643}</td>
                    <td>{carrera.trifecta644}</td>
                    <td>{carrera.trifecta645}</td>
                    
                  </tr>
                  <tr>
                    <td>
                      <img src={btn_6} className="btn_exactas" alt="Logo" />
                      <img src={btn_5} className="btn_exactas" alt="Logo" />
                    </td>
                    <td>{carrera.trifecta651}</td>
                    <td>{carrera.trifecta652}</td>
                    <td>{carrera.trifecta653}</td>
                    <td>{carrera.trifecta654}</td>
                    <td>{carrera.trifecta655}</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    


      
    </>
  );
}

export default Trifectas;
