import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router";
import './rpt_ticket.css';




function rpt_ticket({ urlApi }) {
    let { id } = useParams();
    const [ticket, setTicket] = useState([]);

    const [clase, setClase] = useState('font-sm');

    

    useEffect(()=>{
        let userLocal = JSON.parse(localStorage.getItem("user"));
        
        

        if (userLocal.token.length == 0) return;
        let idticket =   id  ;  
        let token = "Bearer " + userLocal.token;
        fetch(urlApi + "/keno/ticket/" + idticket, {
          method: "GET", // or 'PUT'
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .catch((error) => {
                              swal("Error", "Indique el numero del ticket", "error");
                            })
          .then((response) => {
                                setTicket(response.data.ticketPrint);
                                
                                let font = 0;
                                if (userLocal.parametros.font) font = userLocal.parametros.font;
                                switch (font) { 
                                    case 0: 
                                      setClase('font-sm');
                                      break; 
                                    case 1: 
                                      setClase('font-md');
                                      break; 
                                    case 2: 
                                      setClase('font-lg');
                                      break; 
                                    case 3: 
                                      setClase('font-xl');
                                      break; 
                                    default: 
                                      setClase('font-sm');
                                      break; 
                                    }
                                
                                setTimeout(() => {
                                  window.print()
                                }, 0);
                                 
                                ;
                              });
    },[])

 
    return (  <>
            <div className={ clase }>
            { ticket.map((valor,index)=>{
                return (

                          <p key= { index } >{ valor.linea }</p>
                      )
            }) }

        </div>
            
        
        
    </>);
}


export default rpt_ticket;