import React from 'react';
import FormatNumeric from './formatNumeric';


function resumenventa( {data, setTicketPrint, urlApi, loadingResumenVenta }) {
    let total_venta = 0;    
    let total_premios = 0;
    let total_jackpot = 0;
    let total_ganancia = 0;

    const formatoNumerico = (monto) => {

        const decimals = 2;
        const factor = Math.pow(10, decimals);
        const valor = (Math.round(monto * factor) / factor).toLocaleString('es-ES', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

        return valor;

    }
    

    const ResumenGeneral = (fecha)=>{

        
        if (JSON.parse(localStorage.getItem("user"))){
        
            let userLocal = JSON.parse(localStorage.getItem("user"));
    
            //verificacion de token
            if (userLocal.token.length == 0) return;
            let token = "Bearer " + userLocal.token;      
            let url =  urlApi+'/keno/resumenventagen';
            
            fetch(url, {
                method: "POST", // or 'PUT'     
                body: JSON.stringify({'fecha': fecha}), // data can be `string` or {object}!       
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
                            
                            let utilidad = response.data.venta - response.data.premios - response.data.jackpot;


                            setTicketPrint([
                                {'linea':'KeskPlay.com - Keno'},
                                {'linea':'Resumen General'},
                                {'linea':'Caja: '+userLocal.name},
                                {'linea':'Fecha: '+fecha},
                                {'linea':'------------------------'},
                                {'linea':'Venta: '+formatoNumerico(response.data.venta)},
                                {'linea':'Premios: '+formatoNumerico(response.data.premios)},
                                {'linea':'JackPot: '+formatoNumerico(response.data.jackpot)},
                                {'linea':'Utilidad: '+formatoNumerico(utilidad)},
                                {'linea':'------------------------'}
                            ]);

                            //setData(response.data); 
                        }
                        else {
                            setData([]);
                        }
                    }
                } );
        }
        
    }

  return (
    <>
        

        
            <table className={ data.length > 0 && !loadingResumenVenta ? 'table table-striped' : 'table table-striped visually-hidden' } >
                <thead>
                    <tr>
                        <th>Fecha</th>                    
                        <th className='text-end'>Venta</th>
                        <th className='text-end'>Premios</th>
                        <th className='text-end'>Jackpot</th>
                        <th className='text-end'>Utilidad</th>
                    </tr>
                </thead>

                <tbody>
                {                  
                    data.map((valor, index)=>{
                        total_venta += valor.venta*1;
                        total_premios += valor.premios*1;                    
                        let ganancia = valor.venta - valor.premios - valor.jackpot;
                        total_ganancia += ganancia*1;
                        return(
                            <tr key={ index }>
                                <td><a href="#" onClick={ () => ResumenGeneral(valor.fecha) } className="text-primary"><i className="fa-solid fa-print"></i></a> { valor.fecha }</td>                            
                                <td className='text-end'><FormatNumeric monto = { valor.venta } /> </td>
                                <td className='text-end'><FormatNumeric monto = { valor.premios } /></td>
                                <td className='text-end'><FormatNumeric monto = { valor.jackpot } /></td>
                                <td className={ ganancia < 0 ? 'text-end text-danger fw-bold' : 'text-end text-primary fw-bold'} ><FormatNumeric monto = { ganancia }  /></td>
                            </tr>
                        )
                    })
                }
                </tbody>
                <tfoot>
                    <tr>
                        <th>Totales</th>
                        <th className='text-end'><FormatNumeric monto = { total_venta } /></th>
                        <th className='text-end'><FormatNumeric monto = { total_premios } /></th>
                        <th className='text-end'><FormatNumeric monto = { total_jackpot } /></th>
                        <th className='text-end'><FormatNumeric monto = { total_ganancia } /></th>
                    </tr>
                </tfoot>        
            </table>
        
            <div className={ loadingResumenVenta ? 'visually-hidden': ''}>
                <div className={ data.length > 0 ? 'visually-hidden' : 'text-center alert alert-danger mt-1' }>No hay venta en el periodo indicado</div>
            </div>
            

            <div className={ loadingResumenVenta ? 'text-center fs-3': 'visually-hidden'}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span> 
                </div>
                <p>Cargando</p>
            </div>

        
    </>
  )
}
export default resumenventa
