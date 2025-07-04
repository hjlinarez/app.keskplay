import React, { useState, useEffect } from "react";

import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";


function UltimasCarreras({ carrera }) {

    

    const [historial, setHistorial] = useState([]);
    

    useEffect(() => {
        if (carrera?.ultimas_carreras) {
            setHistorial(carrera.ultimas_carreras);
        } else {
            setHistorial([]); // Establece un array vacío si `carrera` es undefined
        }
    }, [carrera]);
    
    
    return (
        <>
            
            <div className="card mt-2">
                <div className="card-header fs-4 p-1 bg-warning bg-gradient text-dark fw-bold">HISTORIAL</div>
                <div className="card-body bg-black p-0 m-0 fs-3">
                    <table className="table table-dark table-sm table-striped m-0 w-100" >
                        <tbody>
                            <tr>
                                {                            
                                    historial.map((valor, index) => (
                                        <th key={index} className="text-center">
                                            #{ valor.idevento}
                                        </th>
                                        
                                        ))
                                    }

                            </tr>


                            <tr>
                                {                            
                                    historial.map((valor, index) => (
                                        <th key={index} className="text-center">
                                            <img src={ String(valor.posiciones).slice(0,1) == 1 ? btn_1 : String(valor.posiciones).slice(0,1) == 2 ? btn_2 : String(valor.posiciones).slice(0,1) == 3 ? btn_3 : String(valor.posiciones).slice(0,1) == 4 ? btn_4 : String(valor.posiciones).slice(0,1) == 5 ? btn_5 : btn_6 } className="btn_exactas" />
                                                <img src={ String(valor.posiciones).slice(1,2) == 1 ? btn_1 : String(valor.posiciones).slice(1,2) == 2 ? btn_2 : String(valor.posiciones).slice(1,2) == 3 ? btn_3 : String(valor.posiciones).slice(1,2) == 4 ? btn_4 : String(valor.posiciones).slice(1,2) == 5 ? btn_5 : btn_6 } className="btn_exactas" />
                                                <img src={ String(valor.posiciones).slice(2,3) == 1 ? btn_1 : String(valor.posiciones).slice(2,3) == 2 ? btn_2 : String(valor.posiciones).slice(2,3) == 3 ? btn_3 : String(valor.posiciones).slice(2,3) == 4 ? btn_4 : String(valor.posiciones).slice(2,3) == 5 ? btn_5 : btn_6 } className="btn_exactas" />
                                        </th>
                                        
                                        ))
                                    }

                            </tr>
                        </tbody>

                    </table>
                    <div className="row">

                    
                    


                    </div>
                </div>
            </div>
            
            
            
        </>
    )
}

export default UltimasCarreras;