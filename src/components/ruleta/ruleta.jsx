import React, { useState, useEffect, useRef } from "react";
import Footer from "../footer";
import ruletaimg from  "./img/ruleta.png";
import esferaimg from  "./img/esfera.png";
import bolaimg from  "./img/bola.png";

import logokeskplay from  "../../img/logo_keskplay.png";
import Evento from "./evento.jsx";
import Jugadas from "./jugadas.jsx";
import Logo from "./logo.jsx";
import Jackpot from "./jackpot.jsx";
import LastResult from "./lastresult.jsx";
import Last120 from "./last120.jsx";
import Derecha from "./derecha.jsx";
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

  const buildRandomPocketValues = () =>
    Array.from({ length: 37 }, () => 0);

  const rouletteNumbers = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
    24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
  ];

  const redNumbers = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);

  const pocketRing = rouletteNumbers.map((value, index) => {
    const angle = (index / rouletteNumbers.length) * Math.PI * 2 - Math.PI / 2;
    const radius = 415;
    const centerX = 450;
    const centerY = 450;

    return {
      value,
      left: centerX + Math.cos(angle) * radius,
      top: centerY + Math.sin(angle) * radius,
      className: value === 0 ? "green" : redNumbers.has(value) ? "red" : "black",
    };
  });

  const [sorteo, setSorteo] = useState([]);
  const [ejecutarSorteo, setEjecutarSorteo] = useState(false);  
  const [mostrarjackpot, setMostrarjackpot] = useState(false);
  const [pocketValues, setPocketValues] = useState(buildRandomPocketValues);
  const [isSorteoEnCurso, setIsSorteoEnCurso] = useState(false);
  const previousSorteoIdRef = useRef(null);

  useEffect(() => {
    document.body.style.background = '#024905';
    document.body.style.backgroundImage = `url(${fondoImagen})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

    return () => {
      document.body.style.background = '';
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
      setIsSorteoEnCurso(true);
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

  useEffect(() => {
    if (!sorteo?.idsorteo) {
      return;
    }

    const isFirstLoad = previousSorteoIdRef.current === null;
    const isNewSorteo = previousSorteoIdRef.current !== sorteo.idsorteo;

    if (isFirstLoad || isNewSorteo) {
      setIsSorteoEnCurso(false);
      setPocketValues(buildRandomPocketValues());
      previousSorteoIdRef.current = sorteo.idsorteo;
    }
  }, [sorteo?.idsorteo]);

  useEffect(() => {
    if (!sorteo?.idsorteo || isSorteoEnCurso) {
      return;
    }

    const incrementTimer = setInterval(() => {
      setPocketValues((prevValues) => {
        if (prevValues.length === 0) {
          return prevValues;
        }

        const nextValues = [...prevValues];
        const updateCount = Math.min(10, nextValues.length);
        const usedIndexes = new Set();

        while (usedIndexes.size < updateCount) {
          const randomIndex = Math.floor(Math.random() * nextValues.length);
          if (usedIndexes.has(randomIndex)) {
            continue;
          }

          usedIndexes.add(randomIndex);
          const incrementValue = Math.floor(Math.random() * 10) + 1;
          nextValues[randomIndex] = (nextValues[randomIndex] + incrementValue) % 1000;
        }

        return nextValues;
      });
    }, 1000);

    return () => {
      clearInterval(incrementTimer);
    };
  }, [sorteo?.idsorteo, isSorteoEnCurso]);


  const highestPocketIndex = pocketValues.length > 0
    ? pocketValues.reduce(
        (highestIndex, value, index, values) => value > values[highestIndex] ? index : highestIndex,
        0
      )
    : -1;
  
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
              <Evento sorteo={sorteo} urlApi={urlApi} setEjecutarSorteo={setEjecutarSorteo} />
              <Logo sorteo={sorteo} urlApi={urlApi} />
              
              <div className={styles.jackpotBottom}>
                <Jackpot sorteo={sorteo} />
              </div>
            </div>


            <div className={styles.centro} id="centro" >              
              <div className={styles.wheelShell}>                
                <img src={ruletaimg} alt="" className={styles.imgruleta} id="img-sorteo"/>
                <img src={bolaimg} alt="" className={styles.bola} id="img-bola"/>
                <img src={esferaimg} alt="" className={styles.imgesfera} id="img-esfera"/>

                <div className={styles.pocketRing} aria-hidden="true">
                  {pocketRing.map(({ value, left, top, className }, index) => (
                    <div
                      key={value === 0 ? "zero" : value}
                      className={`${styles.pocket} ${styles[className]} ${index === highestPocketIndex ? styles.highest : ""}`}
                      style={{ left, top }}
                    >
                      {pocketValues[index] ?? 0}
                    </div>
                  ))}
                </div>
              </div>
            </div>


            


            <div className={styles.derecha} id="derecha">
              
              <Derecha sorteo={sorteo} urlApi={urlApi} />
              
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

