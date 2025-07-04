import React from 'react';
import { useEffect, useState } from "react";

import Footer from './footer';
import Header from './header';

import  "./caja.css";

function Caja() {

  const [zoom, setZoom] = useState(1);
  return (
    <div className="principal">
      <Header />


      <div className="row mt-1">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <div className="card">
                <div className="car-body  ">
                    <div className="m-3 bg-primary p-0">
                      
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col ">
                            <div className="row">
                                <div className="col d-flex">                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="visually-hidden"  placeholder="Jugada" />
                                    <div className="d-flex justify-content-between mb-1">
                                        <input type="text" id="montoapuesta" name="montoapuesta" className="form-control fs-5  text-center" placeholder="Monto" aria-describedby="button-addon2" /> 
                                    </div>
                                    <div className="d-flex justify-content-between">                                    
                                        <button  type="button"  className="btn form-control btn-danger m-0"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                                <div className="col d-grid">
                                    <input type="text" className="form-control text-center mb-1" id="opcionindividual"  placeholder="Opcion"  />                      
                                    <button className="btn btn-success btn-block" type="button" > <i className="fa-solid fa-plus"></i> </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="card mb-1">
                  <div className="card-header text-center">Sorteo # Inicia en</div>
                  <div className="card-body segundos-sorteo p-0 text-center"></div>
                </div> 
                <div className="card">
                    <div className="card-header text-end fs-4 fw-bold">Total a Pagar:  </div>
                    <div className="card-body div_jugadas" >      
                        <table className="table">                    
                            <thead>
                            <tr>
                                <th>Jugada</th>
                                <th>Monto</th>
                            </tr>
                            </thead>
                            <tbody>                  
                            </tbody>
                        </table>
                    </div>

                    <div className="card-footer">                                                   
                        <button type="button"  className="btn btn-danger col-lg-6"> <i className="fa-solid fa-trash"></i> Todo</button>
                        <button type="button"  className='btn btn-success col-lg-6'><i className="fa-solid fa-print"></i> Imprimir</button>                  
                    </div>
                </div>
            </div>

           
            
        </div>
      


      <Footer zoom={zoom} setZoom={setZoom} />

    </div>
  

    
  );
}

export default Caja;