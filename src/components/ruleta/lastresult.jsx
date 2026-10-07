import React, { useState, useEffect } from "react";


function getColor(numero) {
  const rojos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  const verdes = [0]; // si incluyes el 0 como verde

  if (verdes.includes(numero)) return "bg-success text-white";
  if (rojos.includes(numero)) return "bg-danger text-white";
  return "bg-dark text-white"; // negro
}


function Lastresult({ sorteo}){


  return (
        <>
        
        <table className="table text-white text-center m-0" style={{fontSize: "1.2em", width: "100%"}}>
          <tbody>
            <tr>
              { sorteo.ultimos_resultados?.map((item, index) => (
                <td key={index} className={`${getColor(item.numero)} `}>{item.numero}</td>
              )) }
            </tr>
            <tr style={{fontWeight: "bold", fontSize: "0.6em", textAlign: "center"}}>

              { sorteo.ultimos_resultados?.map((item, index) => (
                <td key={index} style={{ textAlign: "center", backgroundColor: "rgba(0,0,0,0.3)", color: "white" }}>#{item.idsorteo}</td>
              )) }

              
            </tr>
          </tbody>
        </table>
        
        
        
        </>
        );
}

export default Lastresult;
  

