import React, { useState, useEffect } from "react";
import Logo_keskplay from "../../img/logo_keskplay.png";


function Header( { carrera, urlApi } ) {

    const[mini, setMini] = useState(0);
    const[supe, setSupe] = useState(0);
    const[mega, setMega] = useState(0);

    const [jackpot, setJackpot] = useState({    
                                            mini:0, 
                                            super:0, 
                                            mega: 0});
    


    const[idmoneda, setIdmoneda] = useState('COP');


    const getJackpot = ()=>{
        
            var userid = JSON.parse(localStorage.getItem('userId'));
            var idevento = carrera.idevento;  
            fetch(urlApi+'/galgos/jackpot/'+userid+'/'+idevento)
            .then(response => response.json())        
            .then((response) => {                
                                    
                                    if (response)
                                    {                            
                                      
                                        setJackpot({
                                                        mini:  response.mini, 
                                                        super: response.super, 
                                                        mega:  response.mega
                                                    })
                                    }
                                    })    
        
    }
    
    

    useEffect(() => {
        getJackpot();
        const intervalo = setInterval(() => {          
            getJackpot()
        }, 5000);
        return () => clearInterval(intervalo); // Limpia el intervalo al desmontar
        
      }, [carrera]);

    return (
        <>
        
            <div className="row">
                <div className="col">
                    <div className="card h-100"> {/* Agregamos h-100 */}
                        <div className="card-body card-body2 text-center bg-black text-body-header text-warning text-bold p-0">
                            <img src={Logo_keskplay} className="rounded" width="100"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-10">
                    <div className="row">
                        <div className="col">
                            <div className="card h-100"> {/* Agregamos h-100 */}
                                <div className="card-header bg-warning bg-gradient text-dark fs-5 fw-bold">MINI JACKPOT (<span className="fs-6">{ idmoneda }</span>)</div>
                                <div className="card-body text-center bg-black bg-gradient text-body-header text-warning text-bold p-0 ">
                                    { jackpot.mini.toLocaleString('es-VE')} 
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100"> {/* Agregamos h-100 */}
                                <div className="card-header bg-warning bg-gradient text-dark fs-5 fw-bold">Super Jackpot (<span className="fs-6">{ idmoneda }</span>)</div>
                                <div className="card-body text-center bg-black bg-gradient text-body-header text-warning text-bold p-0">
                                    {jackpot.super.toLocaleString('es-VE') }
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100"> {/* Agregamos h-100 */}
                                <div className="card-header bg-warning bg-gradient text-dark fs-5 fw-bold">Mega Jackpot (<span className="fs-6">{ idmoneda }</span>)</div>
                                <div className="card-body text-center bg-black bg-gradient text-body-header text-warning text-bold p-0">
                                    { jackpot.mega.toLocaleString('es-VE') }
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100"> {/* Agregamos h-100 */}
                                <div className="card-header bg-warning bg-gradient text-dark fs-5 fw-bold">
                                    # Evento: <span id="div_evento">000000</span>
                                </div>
                                <div id="div_time" className="card-body bg-black bg-gradient text-center text-body-header text-warning text-bold p-0">
                                    0.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header;