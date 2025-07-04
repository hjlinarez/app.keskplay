import React, { useState, useEffect } from "react";
import Footer from "../footer";
import ruletaimg from  "./img/ruleta.png";
import bolaimg from  "./img/bola.png";

import logokeskplay from  "../../img/logo_keskplay.png";
import Evento from "./evento.jsx";
import Jugadas from "./jugadas.jsx";
import Logo from "./logo.jsx";
import Jackpot from "./jackpot.jsx";
import LastResult from "./lastresult.jsx";
import Last120 from "./last120.jsx";
import styles from './ruleta.module.css';

import Mostrarjackpot from "../mostrarJackpot.jsx";

import fondoImagen from './img/fondo.jpg';



import { resultadoSorteo } from "./js/index.js"



import Audio_37 from "./audio/0.mp3";
import Audio_1 from "./audio/1.mp3";
import Audio_2 from "./audio/2.mp3";
import Audio_3 from "./audio/3.mp3";
import Audio_4 from "./audio/4.mp3";
import Audio_5 from "./audio/5.mp3";        
import Audio_6 from "./audio/6.mp3";
import Audio_7 from "./audio/7.mp3";
import Audio_8 from "./audio/8.mp3";
import Audio_9 from "./audio/9.mp3";
import Audio_10 from "./audio/10.mp3"; 
import Audio_11 from "./audio/11.mp3";
import Audio_12 from "./audio/12.mp3";
import Audio_13 from "./audio/13.mp3";
import Audio_14 from "./audio/14.mp3";
import Audio_15 from "./audio/15.mp3";
import Audio_16 from "./audio/16.mp3";
import Audio_17 from "./audio/17.mp3";
import Audio_18 from "./audio/18.mp3";
import Audio_19 from "./audio/19.mp3";
import Audio_20 from "./audio/20.mp3";
import Audio_21 from "./audio/21.mp3";
import Audio_22 from "./audio/22.mp3";
import Audio_23 from "./audio/23.mp3";
import Audio_24 from "./audio/24.mp3";
import Audio_25 from "./audio/25.mp3";
import Audio_26 from "./audio/26.mp3";
import Audio_27 from "./audio/27.mp3";
import Audio_28 from "./audio/28.mp3";
import Audio_29 from "./audio/29.mp3";
import Audio_30 from "./audio/30.mp3";
import Audio_31 from "./audio/31.mp3";
import Audio_32 from "./audio/32.mp3";
import Audio_33 from "./audio/33.mp3";
import Audio_34 from "./audio/34.mp3";
import Audio_35 from "./audio/35.mp3";
import Audio_36 from "./audio/36.mp3";
import Audio from "./audio/roullette.mp3";








function Ruleta({ urlApi }) {

  const [sorteo, setSorteo] = useState([]);
  const [ejecutarSorteo, setEjecutarSorteo] = useState(false);  
  const [mostrarjackpot, setMostrarjackpot] = useState(false);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${fondoImagen})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);


  const fetchSorteo = async () => {
            try {
              const response = await fetch(`${urlApi}/ruleta/sorteo`);
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              const data = await response.json();
              //data.segundos = 5
              console.log(data);
              setSorteo(data);
              
            } catch (error) {
              console.error("Error fetching sorteo:", error);
            }
          };




  useEffect(() => {
    // Set the document title

    if(ejecutarSorteo) {
      setEjecutarSorteo(false);
      console.log("Ejecutando el sorteo #", sorteo.idsorteo);
      resultadoSorteo(sorteo.idsorteo, fetchSorteo, setMostrarjackpot);
      
      
      
    }
  }, [ejecutarSorteo]);

  useEffect(() => {
    // Fetch the latest draw data from the API
    

    fetchSorteo();
  }
  , []);


  
  return (
    <>

      <audio id="myAudio"><source src={Audio} type="audio/mp3" /></audio>
      <audio id="myAudio_1"><source src={Audio_1} type="audio/mp3" /></audio>
      <audio id="myAudio_2"><source src={Audio_2} type="audio/mp3" /></audio>
      <audio id="myAudio_3"><source src={Audio_3} type="audio/mp3" /></audio>
      <audio id="myAudio_4"><source src={Audio_4} type="audio/mp3" /></audio> 
      <audio id="myAudio_5"><source src={Audio_5} type="audio/mp3" /></audio>
      <audio id="myAudio_6"><source src={Audio_6} type="audio/mp3" /></audio>
      <audio id="myAudio_7"><source src={Audio_7} type="audio/mp3" /></audio>
      <audio id="myAudio_8"><source src={Audio_8} type="audio/mp3" /></audio>
      <audio id="myAudio_9"><source src={Audio_9} type="audio/mp3" /></audio>
      <audio id="myAudio_10"><source src={Audio_10} type="audio/mp3" /></audio>
      <audio id="myAudio_11"><source src={Audio_11} type="audio/mp3" /></audio>
      <audio id="myAudio_12"><source src={Audio_12} type="audio/mp3" /></audio>
      <audio id="myAudio_13"><source src={Audio_13} type="audio/mp3" /></audio>
      <audio id="myAudio_14"><source src={Audio_14} type="audio/mp3" /></audio>
      <audio id="myAudio_15"><source src={Audio_15} type="audio/mp3" /></audio>
      <audio id="myAudio_16"><source src={Audio_16} type="audio/mp3" /></audio>
      <audio id="myAudio_17"><source src={Audio_17} type="audio/mp3" /></audio>
      <audio id="myAudio_18"><source src={Audio_18} type="audio/mp3" /></audio>
      <audio id="myAudio_19"><source src={Audio_19} type="audio/mp3" /></audio>
      <audio id="myAudio_20"><source src={Audio_20} type="audio/mp3" /></audio>
      <audio id="myAudio_21"><source src={Audio_21} type="audio/mp3" /></audio>
      <audio id="myAudio_22"><source src={Audio_22} type="audio/mp3" /></audio>
      <audio id="myAudio_23"><source src={Audio_23} type="audio/mp3" /></audio>
      <audio id="myAudio_24"><source src={Audio_24} type="audio/mp3" /></audio>
      <audio id="myAudio_25"><source src={Audio_25} type="audio/mp3" /></audio>
      <audio id="myAudio_26"><source src={Audio_26} type="audio/mp3" /></audio>
      <audio id="myAudio_27"><source src={Audio_27} type="audio/mp3" /></audio>
      <audio id="myAudio_28"><source src={Audio_28} type="audio/mp3" /></audio>
      <audio id="myAudio_29"><source src={Audio_29} type="audio/mp3" /></audio>
      <audio id="myAudio_30"><source src={Audio_30} type="audio/mp3" /></audio>
      <audio id="myAudio_31"><source src={Audio_31} type="audio/mp3" /></audio>
      <audio id="myAudio_32"><source src={Audio_32} type="audio/mp3" /></audio>
      <audio id="myAudio_33"><source src={Audio_33} type="audio/mp3" /></audio>
      <audio id="myAudio_34"><source src={Audio_34} type="audio/mp3" /></audio>
      <audio id="myAudio_35"><source src={Audio_35} type="audio/mp3" /></audio>
      <audio id="myAudio_36"><source src={Audio_36} type="audio/mp3" /></audio>     
      <audio id="myAudio_37"><source src={Audio_37} type="audio/mp3" /></audio>

      <Mostrarjackpot mostrarJackpot={mostrarjackpot} />
    
      <div className={styles.wrapper}>
        <div className={styles.principal}>

          

          <div className={styles.rows}>

            

            <div className={styles.izquierda} id="izquierda" >
              <Logo sorteo={sorteo} urlApi={urlApi} />
              <Last120 sorteo={sorteo} urlApi={urlApi} />
              
            </div>


            <div className={styles.centro} id="centro" >              
              <img src={ruletaimg} alt="" className={styles.imgruleta} id="img-sorteo"/>                            
              <img src={bolaimg} alt="" className={styles.bola} id="img-bola"/>
            </div>


            


            <div className={styles.derecha} id="derecha">
              <Evento sorteo={sorteo} urlApi={urlApi} setEjecutarSorteo={setEjecutarSorteo} />
              
              <Jugadas sorteo={sorteo} urlApi={urlApi} />
              <Jackpot sorteo={sorteo} />
              <LastResult sorteo={sorteo} urlApi={urlApi} />
              
              
            </div>
          </div>

          

        </div>
      </div>
      

    <Footer />
    </>
  );
}
// Export the Ruleta component
export default Ruleta;

