import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router";
import './rpt_ticket.css';


function rpt_ticket({ urlApi }) {
    let { id } = useParams();
    const [ticket, setTicket] = useState([])

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
                                setTimeout(() => {
                                  window.print()
                                }, 0);
                                 
                                ;
                              });
    },[])

 
    return (  <>
        
            { ticket.map((valor,index)=>{
                return (

                          <p key= { index }>{ valor.linea }</p>
                      )
            }) }
        
        
    </>);
}


export default rpt_ticket;