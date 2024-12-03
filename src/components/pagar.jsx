import React, { useState } from 'react';
import swal from 'sweetalert';

function pagar( { ticketPago } ) {

    const [ticket, setTicket] = useState({ "idticket": "", "pago_pendiente": 0})
    const [serial, setSerial ] = useState('');
    const urlApi = 'http://localhost:8000/api'

    const ProcesarPago = ()=>{

        if (JSON.parse(localStorage.getItem("user"))){
        
            let userLocal = JSON.parse(localStorage.getItem("user"));
    
            //verificacion de token
            if (userLocal.token.length == 0) return;
            let token = "Bearer " + userLocal.token;      
            let url =  urlApi+'/keno/pagarticket';
            
            fetch(url, {
                method: "POST", // or 'PUT'     
                body: JSON.stringify({'idticket': ticketPago.idticket, 'serial': serial}), // data can be `string` or {object}!       
                headers: {
                "Accept":"application/json",
                "Content-Type": "application/json",
                "Authorization": token
                },
            }) 
                .then((res) => res.json())
                .catch((error) => errorConexion())
                .then((response) => {
                    //console.log(response.message)
                    if (response.message != 'Unauthenticated.') {
                        if (response.success){                                                        
                            //swal("Exito",response.message, "success")
                        }
                        else {
                            swal("Error",response.message, "error")
                        }
                    }
                } );
        }
    }


    return (  
        <>
            <form action="">
                <div className="row">
                    <div className="col">
                    
                        <label>Numero Ticket</label>
                        <input type="text" className="input form-control" disabled="disabled" value={ ticketPago.idticket }/>
                        <label>Monto Pago</label>
                        <input type="text" className="input form-control" disabled="disabled" />
                        <label>Serial de Pago</label>
                        <input type="text" className="input form-control fs-4 text-center" value= { serial } onChange={ e => setSerial(e.target.value) } placeholder=''/>
                    </div>
                </div>
                <hr />
                <button type="button" className="btn btn-success form-control" onClick={ () => ProcesarPago() }>Pagar</button>
            </form>
        </>
    );
}

export default pagar;
<>
</>