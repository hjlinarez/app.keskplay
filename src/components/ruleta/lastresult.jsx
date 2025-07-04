import React, { useState, useEffect } from "react";


function getColor(numero) {
  const rojos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  const verdes = [0]; // si incluyes el 0 como verde

  if (verdes.includes(numero)) return "btn-success";
  if (rojos.includes(numero)) return "btn-danger";
  return "btn-dark"; // negro
}


function Lastresult({ sorteo}){


  return (
        <>
        
        <div className="card mt-1">
          <div className="card-header text-center bg-warning text-dark fw-bold">Ultimos 5 resultados</div>
          <div className="card-body text-center p-1 m-0">

            <div className="btn-group btn-group-lg w-100" role="group" >
            { sorteo.ultimos_resultados?.map((item, index) => (
                <button key={index} type="button" className={`btn ${getColor(item.numero)} fs-5 m-0 p-1`}><span className="badge text-white p-1">{item.numero}</span></button>
            )) }
            </div>
          </div>
        </div>
        </>
        );
}

export default Lastresult;
  

