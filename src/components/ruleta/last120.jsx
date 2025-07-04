import React, { useState, useEffect } from "react";


function getColor(numero) {  
  const rojos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  const verdes = [0]; // si incluyes el 0 como verde
  if (verdes.includes(numero)) return "btn-success";
  if (rojos.includes(numero)) return "btn-danger";
  return "btn-dark"; // negro
}


function Last120({ sorteo}){

  let verde=0;
  let rojo=0;
  let negro=0;
  let par=0;
  let impar=0;
  let doc1=0
  let doc2=0
  let doc3=0

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


      });


  return (
        <>
        <div className="card bg-transparent" >
          <div className="card-header text-center bg-warning  text-dark fw-bold">Ult. 120 resultados</div>
          <div className="card-body  text-center p-1 m-0 bg-transparent" >

          
          <div className="d-flex flex-wrap justify-content-center gap-1" role="group">
            {sorteo.ultimos120sorteos?.map((item, index) => {
              const isPrimero = index === 0;
              
              return (
                <button key={index} type="button" className={`btn ${getColor(Number(item.numero))} fs-2 d-flex align-items-center justify-content-center gap-1`}
                  style={{
                    maxHeight:"34px",
                    width: isPrimero ? "100%" : "auto",
                    minWidth: isPrimero ? undefined : "60px",
                    flex: isPrimero ? "0 0 100%" : "1 0 60px"
                  }}
                >
                  <span className="badge text-white p-1 ">{item.numero} </span>
                  <span className="badge text-bg-light p-1 fs-6">{item.veces}</span>
                </button>
              );
            })}

            
            
          </div>
          <div className="d-flex w-100 mt-1" >

            
            <div className="card flex-fill">
              <div className="card-header m-0 p-0 bg-danger text-white fw-bold text-center">Rojo</div>
              <div className="card-body m-0 p-0 text-center">{ rojo }</div>
            </div>
            <div className="card flex-fill">
              <div className="card-header m-0 p-0 bg-dark text-white fw-bold text-center">Negro</div>
              <div className="card-body m-0 p-0 text-center">{ negro }</div>
            </div>


            
          </div>

          

          <div className="d-flex w-100 mt-1" >            
            <div className="card flex-fill">
              <div className="card-header m-0 p-0 bg-warning text-black fw-bold text-center">Pares</div>
              <div className="card-body m-0 p-0 text-center">{ par }</div>
            </div>

            <div className="card flex-fill">
              <div className="card-header m-0 p-0 bg-warning text-black fw-bold text-center">Impares</div>
              <div className="card-body m-0 p-0 text-center">{ impar }</div>
            </div>
            
          </div>

          <div className="d-flex w-100 mt-1" >
            <div className="card flex-fill">
              <div className="card-header m-0 p-0 bg-warning text-black fw-bold text-center">Doc. I</div>
              <div className="card-body m-0 p-0 text-center">{ doc1 }</div>
            </div>
            <div className="card flex-fill">
              <div className="card-header m-0 p-0 bg-warning text-black fw-bold text-center">Doc. II</div>
              <div className="card-body m-0 p-0 text-center">{ doc2 }</div>
            </div>
            <div className="card flex-fill">
              <div className="card-header m-0 p-0 bg-warning text-black fw-bold text-center">Doc. III</div>
              <div className="card-body m-0 p-0 text-center">{ doc3 }</div>
            </div>
            
            
            
          </div>
          
        </div>
        </div>
        </>
        );
}

export default Last120;
  

