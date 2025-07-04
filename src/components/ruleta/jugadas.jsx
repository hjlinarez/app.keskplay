import React, { useState, useEffect } from "react";

function Jugadas({ sorteo, urlApi }) {
  return (
    <>
    
    <div className="card mt-1">
          <div className="card-header text-center bg-warning text-dark fw-bold">Pagos</div>
          <div className="card-body m-0 p-0">
            <table className="table table-sm table-striped p-0 m-0">
                         <tbody>
                            <tr >
                                <td   className="align-middle">Exacto (0-36)</td>
                                <td aling="right"><span className="btn btn-sm bg-success text-white fs-4">X36</span></td>
                            </tr>
                            <tr>
                                <td  className="align-middle">Rojo | Negro</td>
                                <td aling="right" >
                                                <span className="btn  btn-sm bg-danger text-white fs-4">X2</span>
                                                <span className="btn  btn-sm bg-black text-white fs-4">X2</span>
                                </td>
                            </tr>
                            <tr>
                                <td  className="align-middle">
                                  
                                  <p className="p-0 m-0">01-18 | 19-36</p>
                                  
                                </td>
                                <td ><span className="btn  btn-sm bg-success text-white fs-4" >X2</span></td>
                            </tr>

                            <tr>
                                <td className="align-middle">
                                    <p className="p-0 m-0">01-12 | 13-24</p>
                                    
                                    <p className="p-0 m-0">25-36</p>
                                  </td>
                                <td className="align-middle"><span className="btn  btn-sm bg-success text-white fs-4" >X3</span></td>
                            </tr>

                            <tr>
                                <td className="align-middle">
                                    <p className="p-0 m-0">01-06 | 07-12</p>
                                    <p className="p-0 m-0">13-18 | 19-24</p>
                                    <p className="p-0 m-0">25-30 | 31-36</p>
                                  </td>
                                <td className="align-middle"><span className="btn  btn-sm bg-success text-white fs-4" >X6</span></td>
                            </tr>
                            <tr>
                                <td  className="align-middle">Par | Impar</td>
                                <td ><span className="btn  btn-sm bg-success text-white fs-4" >X2</span></td>
                            </tr>
                        </tbody>
                    </table>
                 
          </div>
        </div>

        
    </>
  );
}
export default Jugadas;