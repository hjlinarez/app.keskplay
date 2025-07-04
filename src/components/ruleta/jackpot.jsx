import React, { useState, useEffect } from "react";

function Jackpot({sorteo})
{

    const [jackpot, setJackpot] = useState({    
                                            mini:0, 
                                            super:0, 
                                            mega: 0});
    

    const getJackpot = ()=>{
        let userid = localStorage.getItem("userId");
        if (userid > 0 && sorteo.idsorteo > 0 && sorteo.segundos > 15)
        {
          
            fetch('https://api.keskplay.com/api/ruleta/jackpot/'+userid+'/'+sorteo.idsorteo)
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
    }

    useEffect(()=>{
        getJackpot();
        const intervalo = setInterval(() => {
                                    getJackpot();
                                    }, 5000); // cada 5 segundos

    return () => clearInterval(intervalo); // limpia el temporizador si el componente se desmonta

    },[sorteo])

    return (<>
    <div className="card mt-1">
      <div className="card-header bg-dark text-white p-1 text-center">MegaJackpot</div>
      <div className="card-body fs-2 text-center p-0">
        { jackpot.mega.toLocaleString("es-VE") }
        </div>
    </div>

    <div className="card mt-1">
      <div className="card-header bg-dark text-white p-1 text-center">Super Jackpot</div>
      <div className="card-body fs-2 text-center p-0">
        { jackpot.super.toLocaleString("es-VE") }
        </div>
    </div>

    <div className="card mt-1">
      <div className="card-header bg-dark text-white p-1 text-center">Mini Jackpot</div>
      <div className="card-body fs-2 text-center p-0">
        { jackpot.mini.toLocaleString("es-VE") }
        </div>
    </div>
    </>)
}

export default Jackpot