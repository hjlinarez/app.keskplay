import React, { useEffect, useState } from "react";
import FormatNumeric from "./formatNumeric";

function ticket( { 
                    ticket, 
                    pagarTicket, 
                    anularTicket, 
                    jugadas,
                    setJugadas,
                    Procesar,
                    RepetirTicket
                } ) {

    //const [ticket, setTicket] = useState(myticket);
    const [btnanularticket, setBtnanularticket] = useState(false);
    const [btnpagarticket, setBtnpagarticket] = useState(false);
    

    useEffect(()=>{            
        if (ticket.pendiente > 0) setBtnpagarticket(true); else setBtnpagarticket(false);
        if (ticket.resultado_sorteo.length > 0 || ticket.estatus == 'ANU'){
            setBtnanularticket(false); 
        } 
        else {
            setBtnanularticket(true);
        }    
    },[ticket])


    let array_resultado = ticket.resultado_sorteo.split(";");


    return ( 
        <>
        <div className="modal fade" id="ConsultarTicketModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ConsultarTicketModalpLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ConsultarTicketpLabel">Consultar Ticket</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body ">
                            
                            <div className="row">

                                






                                <div className="col">
                                    <span className="fw-bold">Nro. Ticket: </span> { ticket.idticket } { ticket.estatus == 'ANU' ? <span className="badge text-bg-danger">Anulado</span>: ''}
                                </div>
                                <div className="col">
                                    <span className="fw-bold">Fecha - Hora: </span> { ticket.fecha_ticket }
                                </div> 
                                <div className="col">
                                    <span className="fw-bold">Apuesta  : </span> <FormatNumeric monto = { ticket.apuestatotal }/>
                                </div>
                                 
                            </div>
                            <div className="row">
                                
                                <div className="col"><span className="fw-bold">Premio: </span><br/><FormatNumeric monto = { ticket.totalpremio }/></div> 
                                <div className="col"><span className="fw-bold">Jackpot: </span><br/><FormatNumeric monto = { ticket.premio_jackpot }/></div> 
                                <div className="col"><span className="fw-bold">Pagado: </span><br/><FormatNumeric monto = { ticket.pagado }/></div> 
                                <div className="col"><span className="fw-bold">Pendiente: </span><br/><FormatNumeric monto = { ticket.pendiente }/></div> 
                            </div>
                            <div className="row">
                                <div className="col">
                                <span className="fw-bold">Resultado: </span><br/> { 
                                array_resultado.map((valor, index)=>{
                                    return (
                                        <span key={ index } className="badge text-bg-primary rounded-pill">{ valor }</span>
                                    )
                                    
                                })
                                }
                                </div>
                            </div>
                            
                            

                            <hr />
                        
                            <div className="body_cons_ticket">

                                
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Elegidos</th>
                                            <th className="text-end">Acertados</th>
                                            <th className="text-end">Apuesta</th>
                                            <th className="text-end">Ganado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            ticket.jugadas.map((valor, index)=>{


                                                let elegidos_array = valor.elegidos.split(";");
                                                return(
                                                        <tr key={ index }>
                                                            <td>{ 
                                                            
                                                            elegidos_array.map((v, i)=>{
                                                                return (
                                                                    <span key ={ i } className={  array_resultado.includes(v) ? "badge text-bg-success rounded-pill" :  "badge text-bg-danger rounded-pill"} >{ v }</span>
                                                                )

                                                            })
                                                            } </td>
                                                            <td className="text-center">{ elegidos_array.length }/{ valor.acertados } </td>
                                                            <td className="text-end">{ valor.monto } </td>
                                                            <td className="text-end">
                                                                {
                                                                    valor.estatus == "GAN" ? valor.factor * valor.monto : 0
                                                                }
                                                            </td>
                                                        </tr>
                                                )
                                            })
                                            
                                        }

                                </tbody>

                                        
                                    
                                </table>

                            </div>
                            
                        </div>

                        <div className="modal-footer">
                        

                            <div className="row">
                                <div className="col">
                                    <button onClick={ ()=> RepetirTicket(ticket.idticket) } className="btn btn-outline-success m-1">Repetir</button>                                                                        
                                    <button onClick={ ()=> { $("#ConsultarTicketModal").modal('hide'); pagarTicket(ticket.idticket) } } className={btnpagarticket ? "btn btn-primary m-1": "btn btn-outline-default m-1 disabled"}>Pagar</button>
                                    <button onClick={ ()=> { $("#ConsultarTicketModal").modal('hide'); anularTicket(ticket.idticket) } } className={btnanularticket ? "btn btn-danger m-1": "btn btn-outline-default m-1 disabled"}>Anular</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ticket;