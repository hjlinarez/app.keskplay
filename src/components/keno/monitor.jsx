import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { mostrar_sorteo } from './js/monitor.js'
import  Factores from './factores.png'
import  Jackpot from './jackpot.png'
import Login from './login.jsx'
import Footer from "../footer";

import  './monitor.css'

import fondoImagen from './img/fondo.jpg';

function Monitor({ urlApi }) {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${fondoImagen})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
    
        return () => {
          document.body.style.backgroundImage = '';
        };
      }, []);
   
    if (localStorage.getItem('zoom')){    
        document.body.style.zoom = localStorage.getItem('zoom');
    }
    else{
        localStorage.setItem('zoom', 1);
    }  
    const [zoom, setZoom] = useState(localStorage.getItem('zoom'));
    const [jackpot, setJackpot] = useState({mini:0, porc_mini:0, super:0, porc_super:0, mega:0, porc_mega:0})
    const [activeJackpotIndex, setActiveJackpotIndex] = useState(0);
    const [detenerIncremento, setDetenerIncremento] = useState(false);
    const [celdasConValor, setCeldasConValor] = useState(() =>
        Array.from({ length: 80 }, (_, index) => ({
            numero: index + 1,
            aleatorio: Math.floor(Math.random() * (9999 - 451 + 1)) + 451
        }))
    );
    const jackpotSlides = [
        { key: 'mini', label: 'Mini', value: {monto: jackpot.mini, porcentaje:jackpot.porc_mini} },
        { key: 'super', label: 'Super', value: {monto: jackpot.super, porcentaje:jackpot.porc_super} },
        { key: 'mega', label: 'Mega', value: {monto: jackpot.mega, porcentaje:jackpot.porc_mega} }
    ];

    const view_jackpot = ()=>{

        let sorteo = document.querySelector("#idsorteo").innerHTML;
        let userid = localStorage.getItem("userId");
        
        if (userid > 0 && sorteo > 0)
        {
            fetch('https://api.keskplay.com/api/keno/jackpot/'+userid+'/'+sorteo)
            .then(response => response.json())        
            .then((response) => {                
                                    
                                    if (response)
                                    {                            
                                        setJackpot({
                                                        mini:  response.mini, 
                                                        porc_mini:  response.porc_mini,
                                                        super: response.super, 
                                                        porc_super:  response.porc_super,
                                                        mega:  response.mega,
                                                        porc_mega:  response.porc_mega
                                                    })
                                    }
                                    })    
        }
        

        
    }

    


    useEffect(()=>{
        let vzoom = localStorage.getItem('zoom');
        vzoom = Math.min(zoom, 2.5);
        vzoom = Math.max(zoom, 0.5); 
        document.body.style.zoom = vzoom;
        localStorage.setItem('zoom', document.body.style.zoom);
        //console.log({ zoom })
    },[zoom])
    
    
    const[userid, setUserid] = useState(0);
    const [cerrandoApuestas, setCerrandoApuestas] = useState(true)

    const [mostrarjackpot, setMostrarjackpot] = useState(true)

    useEffect(()=>{
        if (localStorage.getItem("userId")) {
            setUserid(localStorage.getItem("userId"));
            
            
        } else {
            setCerrandoApuestas(true);
            $('#modalLogin').modal('show')
        };

    },[])



    useEffect(() => { 
        // Definir la función de consulta 
        const fetchData = async () => 
            { 
                let sorteo = document.querySelector("#idsorteo").innerHTML;
                let userid = localStorage.getItem("userId");
                
                try { 
                        const response = await fetch('https://api.keskplay.com/api/keno/jackpotNew/'+userid+'/'+sorteo); 
                        const result = await response.json(); 
                        
                            setJackpot({
                                mini:  result.mini, 
                                porc_mini:  result.porc_mini, 
                                super: result.super, 
                                porc_super:  result.porc_super,
                                mega:  result.mega,
                                porc_mega:  result.porc_mega

                            })

                } catch (error) { 
                    setJackpot({
                        mini:  jackpot.mini, 
                        porc_mini:  jackpot.porc_mini,
                        super: jackpot.super, 
                        porc_super:  jackpot.porc_super,
                        mega:  jackpot.mega,
                        porc_mega:  jackpot.porc_mega
                    })
                   
                } 
            }; 
            // Llamar a la función inmediatamente y luego cada 2 segundos \
            fetchData(); const interval = setInterval(fetchData, 15000); 
            // Limpiar el intervalo cuando el componente se desmonte 
            return () => clearInterval(interval); 
        },[]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveJackpotIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (detenerIncremento) {
            return;
        }

        const interval = setInterval(() => {
            setCeldasConValor((prev) => {
                if (prev.every((celda) => celda.aleatorio >= 9999)) {
                    clearInterval(interval);
                    return prev;
                }

                let huboCambio = false;
                let actualizado = prev.map((celda) => {
                    if (celda.aleatorio >= 9999) {
                        return celda;
                    }

                    if (Math.random() < 0.45) {
                        huboCambio = true;
                        return {
                            ...celda,
                            aleatorio: Math.min(9999, celda.aleatorio + 1)
                        };
                    }

                    return celda;
                });

                // Asegura que siempre al menos una celda avance por ciclo.
                if (!huboCambio) {
                    const disponibles = actualizado
                        .map((celda, index) => (celda.aleatorio < 9999 ? index : -1))
                        .filter((index) => index >= 0);

                    if (disponibles.length > 0) {
                        const elegido = disponibles[Math.floor(Math.random() * disponibles.length)];
                        actualizado = [...actualizado];
                        actualizado[elegido] = {
                            ...actualizado[elegido],
                            aleatorio: Math.min(9999, actualizado[elegido].aleatorio + 1)
                        };
                    }
                }

                return actualizado;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [detenerIncremento]);

    useEffect(() => {
        const interval = setInterval(() => {
            const contadorTexto = document.querySelector("#text_contador")?.value;
            const contador = Number(contadorTexto);

            if (!Number.isNaN(contador) && contador <= 0) {
                setDetenerIncremento(true);
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        if (userid > 0){
            mostrar_sorteo(userid);
            setCerrandoApuestas(false);                    
            //const intervalo_tickets = setInterval(() => {view_jackpot();}, 10000);
            //return () => clearInterval(intervalo_tickets);
        }  
       
    }, [userid]) 




    const cerrarSession = ()=>{
        setCerrandoApuestas(true);
            $('#modalLogin').modal('show');
    };

    
    return ( <>

       
        
        <div className={ cerrandoApuestas ? 'cerrando_apuestas': 'visually-hidden' }></div>

        <Login  setUserid = { setUserid } urlApi = { urlApi } />
            <input type="hidden" id="text_contador" name="text_contador"/>
            
            <div className="row" id="principal">

                    


                
                    <section id="encabezado"> 
                        <div id="bola_1" className="bola"></div>
                        <div id="bola_2" className="bola"></div>
                        <div id="bola_3" className="bola"></div>
                        <div id="bola_4" className="bola"></div>
                        <div id="bola_5" className="bola"></div>
                        <div id="bola_6" className="bola"></div>
                        <div id="bola_7" className="bola"></div>
                        <div id="bola_8" className="bola"></div>
                        <div id="bola_9" className="bola"></div>
                        <div id="bola_10" className="bola"></div>
                        <div id="bola_11" className="bola"></div>
                        <div id="bola_12" className="bola"></div>
                        <div id="bola_13" className="bola"></div>
                        <div id="bola_14" className="bola"></div>
                        <div id="bola_15" className="bola"></div>
                        <div id="bola_16" className="bola"></div>
                        <div id="bola_17" className="bola"></div>
                        <div id="bola_18" className="bola"></div>
                        <div id="bola_19" className="bola"></div>
                        <div id="bola_20" className="bola"></div>
                    </section>
                    
                    <div className="row m-0 p-0" id="cuerpo">
                        <div className="col-7" id="izquierdo">                
                            <div className="row">
                                <div className="col">
                                    {celdasConValor.map((celda) => (
                                        <div id={`celda_${celda.numero}`} className="celda table_80_1" key={celda.numero}>
                                            {celda.numero}
                                            <span className="celda-random">{celda.aleatorio}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="row p-1" id="leyenda">
                                <div id="partida" className="col-3" >
                                    <h2>PARTIDA</h2>
                                    <div id="idsorteo" className="h4 text-danger">000000</div>
                                    <div className="h4" id="div_segundos"></div>
                                </div>
                                <div id="idresultados" className="col">
                                </div>
                            </div>
                        </div>
                        <div className="col m-0 p-2" id="derecho">

                            <section id="section_barra_progreso"></section>
                            <div id="videos" className="mt-1">
                            </div>

                            <div className="jackpots">
                                {jackpotSlides.map((item, index) => {
                                    const porcentaje = Number(item.value.porcentaje || 0);
                                    const porcentajeAjustado = Math.max(0, Math.min(100, porcentaje));

                                    return (
                                        <div
                                            id={`div_${item.key}jackpot`}
                                            key={item.key}
                                            className={index === activeJackpotIndex ? 'jackpot-slide active' : 'jackpot-slide'}
                                        >
                                            <div className="jackpot-line">
                                                <span className="jackpot-value">{item.label}: {new Intl.NumberFormat('es-ES', { maximumFractionDigits: 2 }).format(Number(item.value.monto || 0))}</span>
                                                <div className="jackpot-percent-wrapper">
                                                    <div
                                                        className="jackpot-percent-bar"
                                                        style={{ width: `${porcentajeAjustado}%` }}
                                                    >
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            

                           

                            <div className="capa_coeficiente">
                                <img src={ Factores } id="img_factores" className="fade-out"/>
                                <img src={ Jackpot } id="img_jackpot" className='jackpot_ganador_new' />
                            </div>
                        </div>
                    </div>
            </div>

            <Footer/>


           



    </>  );
}

export default Monitor