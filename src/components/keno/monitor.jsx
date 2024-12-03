import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { mostrar_sorteo } from './js/monitor.js'
import  Factores from './factores.png'
import  Jackpot from './jackpot.png'
import Login from './login.jsx'





import  './monitor.css'

function Monitor({ urlApi }) {
   
    if (localStorage.getItem('zoom')){    
        document.body.style.zoom = localStorage.getItem('zoom');
    }
    else{
        localStorage.setItem('zoom', 1);
    }  

    const [zoom, setZoom] = useState(localStorage.getItem('zoom'));
    
    const [jackpot, setJackpot] = useState({mini:0, super:0, mega:0})

    const view_jackpot = ()=>{

        let sorteo = document.querySelector("#idsorteo").innerHTML;
        let userid = localStorage.getItem("userId");

        

        fetch('https://api.keskplay.com/api/keno/jackpot/'+userid+'/'+sorteo)
        .then(response => response.json())        
        .then((response) => {                
                                //console.log(response)       
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
        if (userid > 0){
            mostrar_sorteo(userid);
            setCerrandoApuestas(false);        
            
            const intervalo_tickets = setInterval(() => {                            
                view_jackpot();
            }, 3000);
            return () => clearInterval(intervalo_tickets);
        }  
       
    }, [userid]) 

    
    return ( <>

       
        
        <div className={ cerrandoApuestas ? 'cerrando_apuestas': 'visually-hidden' }></div>

        <Login  setUserid = { setUserid } urlApi = { urlApi } />
            <input type="hidden" id="text_contador" name="text_contador"/>
            <div className="row" id="principal">

                    <div className="row m-0 p-0">                        
                    <div className={ jackpot.mini > 0 ? 'col': 'col d-none' }>
                            <div className="card card-jackpot">
                                <div className="card-header text-center header-jackpot">Mini Jackpot</div>
                                <div className="card-body fs-1 text-center body-jackpot">{ new Intl.NumberFormat().format(jackpot.mini) }</div>
                            </div>
                        </div>
                        <div className={ jackpot.super > 0 ? 'col': 'col d-none' }>
                            <div className="card card-jackpot">
                                <div className="card-header text-center header-jackpot">Super Jackpot</div>
                                <div className="card-body fs-1 text-center body-jackpot">{ new Intl.NumberFormat().format(jackpot.super) }</div>
                            </div>
                        </div>

                        <div className={ jackpot.mega > 0 ? 'col': 'col d-none' }>
                            <div className="card card-jackpot">
                                <div className="card-header text-center header-jackpot">Mega Jackpot</div>
                                <div className="card-body fs-1 text-center body-jackpot">{ new Intl.NumberFormat().format(jackpot.mega) }</div>
                            </div>
                        </div>


                        
                    </div>
                
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
                    <section id="section_barra_progreso" >
                                                    
                    </section>
                    <div className="row m-0 p-0" id="cuerpo">
                        <div className="col-7" id="izquierdo">                
                            <div className="row">
                                <div className="col">
                                    <div id="celda_1"  className="celda table_80_1">1</div>
                                    <div id="celda_2"  className="celda table_80_1">2</div>
                                    <div id="celda_3"  className="celda table_80_1">3</div>
                                    <div id="celda_4"  className="celda table_80_1">4</div>
                                    <div id="celda_5"  className="celda table_80_1">5</div>
                                    <div id="celda_6"  className="celda table_80_1">6</div>
                                    <div id="celda_7"  className="celda table_80_1">7</div>
                                    <div id="celda_8"  className="celda table_80_1">8</div>
                                    <div id="celda_9"  className="celda table_80_1">9</div>
                                    <div id="celda_10" className="celda table_80_1">10</div>
                                    <div id="celda_11" className="celda table_80_1">11</div>
                                    <div id="celda_12" className="celda table_80_1">12</div>
                                    <div id="celda_13" className="celda table_80_1">13</div>
                                    <div id="celda_14" className="celda table_80_1">14</div>
                                    <div id="celda_15" className="celda table_80_1">15</div>
                                    <div id="celda_16" className="celda table_80_1">16</div>
                                    <div id="celda_17" className="celda table_80_1">17</div>
                                    <div id="celda_18" className="celda table_80_1">18</div>
                                    <div id="celda_19" className="celda table_80_1">19</div>
                                    <div id="celda_20" className="celda table_80_1">20</div>
                                    <div id="celda_21" className="celda table_80_1">21</div>
                                    <div id="celda_22" className="celda table_80_1">22</div>
                                    <div id="celda_23" className="celda table_80_1">23</div>
                                    <div id="celda_24" className="celda table_80_1">24</div>
                                    <div id="celda_25" className="celda table_80_1">25</div>
                                    <div id="celda_26" className="celda table_80_1">26</div>
                                    <div id="celda_27" className="celda table_80_1">27</div>
                                    <div id="celda_28" className="celda table_80_1">28</div>
                                    <div id="celda_29" className="celda table_80_1">29</div>
                                    <div id="celda_30" className="celda table_80_1">30</div>
                                    <div id="celda_31" className="celda table_80_1">31</div>
                                    <div id="celda_32" className="celda table_80_1">32</div>
                                    <div id="celda_33" className="celda table_80_1">33</div>
                                    <div id="celda_34" className="celda table_80_1">34</div>
                                    <div id="celda_35" className="celda table_80_1">35</div>
                                    <div id="celda_36" className="celda table_80_1">36</div>
                                    <div id="celda_37" className="celda table_80_1">37</div>
                                    <div id="celda_38" className="celda table_80_1">38</div>
                                    <div id="celda_39" className="celda table_80_1">39</div>
                                    <div id="celda_40" className="celda table_80_1">40</div>
                                    <div id="celda_41" className="celda table_80_1">41</div>
                                    <div id="celda_42" className="celda table_80_1">42</div>
                                    <div id="celda_43" className="celda table_80_1">43</div>
                                    <div id="celda_44" className="celda table_80_1">44</div>
                                    <div id="celda_45" className="celda table_80_1">45</div>
                                    <div id="celda_46" className="celda table_80_1">46</div>
                                    <div id="celda_47" className="celda table_80_1">47</div>
                                    <div id="celda_48" className="celda table_80_1">48</div>
                                    <div id="celda_49" className="celda table_80_1">49</div>
                                    <div id="celda_50" className="celda table_80_1">50</div>
                                    <div id="celda_51" className="celda table_80_1">51</div>
                                    <div id="celda_52" className="celda table_80_1">52</div>
                                    <div id="celda_53" className="celda table_80_1">53</div>
                                    <div id="celda_54" className="celda table_80_1">54</div>
                                    <div id="celda_55" className="celda table_80_1">55</div>
                                    <div id="celda_56" className="celda table_80_1">56</div>
                                    <div id="celda_57" className="celda table_80_1">57</div>
                                    <div id="celda_58" className="celda table_80_1">58</div>
                                    <div id="celda_59" className="celda table_80_1">59</div>
                                    <div id="celda_60" className="celda table_80_1">60</div>
                                    <div id="celda_61" className="celda table_80_1">61</div>
                                    <div id="celda_62" className="celda table_80_1">62</div>
                                    <div id="celda_63" className="celda table_80_1">63</div>
                                    <div id="celda_64" className="celda table_80_1">64</div>
                                    <div id="celda_65" className="celda table_80_1">65</div>
                                    <div id="celda_66" className="celda table_80_1">66</div>
                                    <div id="celda_67" className="celda table_80_1">67</div>
                                    <div id="celda_68" className="celda table_80_1">68</div>
                                    <div id="celda_69" className="celda table_80_1">69</div>
                                    <div id="celda_70" className="celda table_80_1">70</div>
                                    <div id="celda_71" className="celda table_80_1">71</div>
                                    <div id="celda_72" className="celda table_80_1">72</div>
                                    <div id="celda_73" className="celda table_80_1">73</div>
                                    <div id="celda_74" className="celda table_80_1">74</div>
                                    <div id="celda_75" className="celda table_80_1">75</div>
                                    <div id="celda_76" className="celda table_80_1">76</div>
                                    <div id="celda_77" className="celda table_80_1">77</div>
                                    <div id="celda_78" className="celda table_80_1">78</div>
                                    <div id="celda_79" className="celda table_80_1">79</div>
                                    <div id="celda_80" className="celda table_80_1">80</div>
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
                           
                            <div id="videos">
                            </div>

                           

                            <div className="capa_coeficiente">
                                <img src={ Factores } id="img_factores" className="fade-out"/>
                                <img src={ Jackpot } id="img_jackpot" className='jackpot_ganador_new' />
                            </div>
                        </div>
                    </div>
            </div>


            <nav className="navbar fixed-bottom navbar-expand-lg">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-end">
                            <li className="nav-item">
                            <button type="button" className="btn btn-sucess" onClick={ ()=> setZoom(Number(zoom) - 0.1) }><i className="fa-solid fa-magnifying-glass-minus"></i></button>
                            </li>
                            <li className="nav-item">
                            <button type="button" className="btn btn-sucess" onClick={ ()=> setZoom(Number(zoom) + 0.1) }><i className="fa-solid fa-magnifying-glass-plus"></i></button>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>



    </>  );
}

export default Monitor