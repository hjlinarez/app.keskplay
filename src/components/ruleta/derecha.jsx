import React, { useState, useEffect } from "react";

import LastResult from "./lastresult.jsx";

import styles from './ruleta.module.css';

function getColor(numero) {  
  const rojos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  const verdes = [0]; // si incluyes el 0 como verde
  if (verdes.includes(numero)) return "btn-success";
  if (rojos.includes(numero)) return "btn-danger";
  return "btn-dark"; // negro
}


function derecha({ sorteo, urlApi}){

  let verde=0;
  let rojo=0;
  let negro=0;
  let par=0;
  let impar=0;
  let doc1=0
  let doc2=0
  let doc3=0
    let half1=0
    let half2=0
        let sec_a=0
        let sec_b=0
        let sec_c=0
        let sec_d=0
        let sec_e=0
        let sec_f=0
    

  sorteo.ultimos120sorteos?.forEach((item) => {
        const numero = Number(item.numero);
        const valor = Number(item.veces) || 0;

        if ([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36].includes(numero)) {
          rojo += valor;
        } else if (numero === 0) {
          verde += valor;
        } else {
          negro += valor;
        }

        if (numero % 2 === 0) {
          par += valor;
        } else {
          impar += valor;
        }

        if (numero >=1 && numero <=12){
          doc1 += valor;
        }else if (numero >=13 && numero <=24){
          doc2 += valor;
        }
        else {
          doc3 += valor;
        }

                if (numero >= 1 && numero <= 18) {
                    half1 += valor;
                } else if (numero >= 19 && numero <= 36) {
                    half2 += valor;
                }

                if ([26, 3, 35, 12, 28, 7].includes(numero)) {
                    sec_a += valor;
                }

                        if ([29, 18, 22, 9, 31, 14].includes(numero)) {
                            sec_b += valor;
                        }

                        if ([20, 1, 33, 16, 24, 5].includes(numero)) {
                            sec_c += valor;
                        }

                        if ([10, 23, 8, 30, 11, 36].includes(numero)) {
                            sec_d += valor;
                        }

                        if ([13, 27, 6, 34, 17, 25].includes(numero)) {
                            sec_e += valor;
                        }

                        if ([2, 21, 4, 19, 15, 32].includes(numero)) {
                            sec_f += valor;
                        }


      });


  return (
        <>
        
        <table className={styles.tabladerecha}> 
            <tr>
                <th  style={{textAlign: "center"}}>TABLA DE PAGOS</th>
            </tr>
            <tr>
                <td className="p-2" style={{backgroundColor: "rgba(0,0,0,0.3)"}}>
                    <table style={{width: "100%", color: "white", fontWeight:"bold", fontSize:"0.9em"}}>
                        <tr >
                            <td>NUMERO</td>
                            <td style={{textAlign: "center"}}>X 36</td>
                        </tr>
                        <tr>
                            <td>COLOR</td>
                            <td style={{textAlign: "center"}}>
                                <div className="d-flex justify-content-center gap-1" style={{backgroundColor: "rgb(9,89,6)", padding: "2px"}}>
                                    X 36
                                </div>

                                <div className="d-flex justify-content-center align-items-center gap-1" style={{
                                    background: "linear-gradient(90deg, rgba(152, 16, 6, 0.9) 0%, rgba(152, 16, 6, 0.9) 50%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.9) 100%)",
                                    padding: "2px",
                                    
                                    overflow: "hidden",
                                    minHeight: "24px"
                                }}>
                                    <span style={{flex: 1, textAlign: "center", color: "white"}}>X 2</span>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>SECTOR <span className="small" style={{color: "gray"}}>(A / B / C / D / E / F)</span></td>
                            <td style={{textAlign: "center"}}>X6</td>
                        </tr>
                        <tr>
                            <td>DOCENAS <span className="small"  style={{color: "gray"}}>(1-12 / 13-24 / 25-36)</span></td>
                            <td style={{textAlign: "center"}}>X3</td>
                        </tr>
                        <tr>
                            <td>HALF <span className="small"  style={{color: "gray"}}>(1-18 / 19-36)</span></td>
                            <td style={{textAlign: "center"}}>X2</td>
                        </tr>
                        <tr>
                            <td>PAR / IMPAR</td>
                            <td style={{textAlign: "center"}}>X2</td>
                        </tr>
                        
                    </table>
                </td>
            </tr>

            <tr>
                <th  style={{textAlign: "center"}}>ULTIMAS PARTIDAS</th>
            </tr>
            <tr>
                <td className="p-2">
                    <LastResult sorteo={sorteo} urlApi={urlApi} />
                </td>
            </tr>

            <tr>
                <th  style={{textAlign: "center"}}>ESTADISTICAS (Ultimas 120 Partidas)</th>
            </tr>
            <tr>
                <td className="p-2" style={{backgroundColor: "rgba(0,0,0,0.3)"}}>
                    <h1 className="text-center text-warning fw-bold m-0 mt-2 p-0" style={{fontSize: "1.2em"}}>DOCENAS</h1>


                    <table className="table table-bordered text-white text-center" style={{fontSize: "1.2em"}}>
                        <tr>
                            <th style={{ backgroundColor: "rgba(0,0,0,0.3)", textAlign: "center" }}>1-12</th>
                            <td>{ doc1 }</td>
                            <th style={{ backgroundColor: "rgba(0,0,0,0.3)", textAlign: "center" }}>13-24</th>
                            <td>{ doc2 }</td>
                            <th style={{ backgroundColor: "rgba(0,0,0,0.3)", textAlign: "center" }}>25-36</th>
                            <td>{ doc3 }</td>
                        </tr>
                    </table>

                    


                    <h1 className="text-center text-warning fw-bold m-0 mt-2 p-0" style={{fontSize: "1.2em"}}>HALF</h1>

                    <table className="table table-bordered text-white text-center" style={{fontSize: "1.2em"}}>
                        <tr>
                            <th style={{ backgroundColor: "rgba(0,0,0,0.3)", textAlign: "center" }}>1-18</th>
                            <td>{ half1 }</td>
                            <th style={{ backgroundColor: "rgba(0,0,0,0.3)", textAlign: "center" }}>19-36</th>
                            <td>{ half2 }</td>
                            
                        </tr>
                    </table>


                    <h1 className="text-center text-warning fw-bold m-0 mt-2 p-0" style={{fontSize: "1.2em"}}>SECTOR</h1>
                    <table className="table table-bordered text-white text-center" style={{fontSize: "1.2em"}}>
                        <tr>
                            <th style={{ backgroundColor: "rgba(255, 215, 0, 1)", color: "black", textAlign: "center" }}>A</th>
                            <td>{ sec_a }</td>
                            <th style={{ backgroundColor: "rgba(255, 215, 0, 1)", color: "black", textAlign: "center" }}>B</th>
                            <td>{ sec_b }</td>
                            <th style={{ backgroundColor: "rgba(255, 215, 0, 1)", color: "black", textAlign: "center" }}>C</th>
                            <td>{ sec_c }</td>
                            
                        </tr>
                        <tr>
                            
                            <th style={{ backgroundColor: "rgba(255, 215, 0, 1)", color: "black", textAlign: "center" }}>D</th>
                            <td>{ sec_d }</td>
                            <th style={{ backgroundColor: "rgba(255, 215, 0, 1)", color: "black", textAlign: "center" }}>E</th>
                            <td>{ sec_e }</td>
                            <th style={{ backgroundColor: "rgba(255, 215, 0, 1)", color: "black", textAlign: "center" }}>F</th>
                            <td>{ sec_f }</td>
                        </tr>
                    </table>



                    <h1 className="text-center text-warning fw-bold m-0 mt-2 p-0" style={{fontSize: "1.2em"}}>COLORES</h1>

                    <table className="table table-bordered text-white text-center" style={{fontSize: "1.2em"}}>
                        <tr>
                            <th style={{ backgroundColor: "rgb(178, 2, 2)", textAlign: "center", width: "33%" }}>{ rojo }</th>                            
                            <th style={{ backgroundColor: "rgb(0,0,0)", textAlign: "center", width: "34%" }}>{ negro }</th>                            
                            <th style={{ backgroundColor: "rgb(9,89,6)", textAlign: "center", width: "33%" }}>{ verde }</th>                            
                        </tr>
                    </table>


                    
                </td>

            </tr>
        </table>

        
        </>
        );
}

export default derecha;
  

