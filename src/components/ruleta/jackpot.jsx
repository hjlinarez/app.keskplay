import React, { useState, useEffect } from "react";
import jackpotImagen from './img/jackpot.png';

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

    return (
      <>
        <style>{`
          .casino-jackpot-title {
            margin: 0;
            padding: 0;
            text-align: center;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 2.8em;
            line-height: 1;
            background: linear-gradient(180deg, #fff6c2 0%, #ffd65a 30%, #ffb300 55%, #ff7a00 75%, #d62828 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 10px rgba(255, 215, 106, 0.95), 0 0 20px rgba(255, 153, 0, 0.8), 0 0 30px rgba(190, 30, 45, 0.7);
            animation: jackpotPulse 1.9s ease-in-out infinite alternate;
            font-stretch: expanded;
          }

          @keyframes jackpotPulse {
            0% {
              transform: scale(1);
              filter: drop-shadow(0 0 2px rgba(255, 226, 132, 0.65));
            }
            100% {
              transform: scale(1.04);
              filter: drop-shadow(0 0 8px rgba(255, 226, 132, 0.95));
            }
          }
        `}</style>

        <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
          <img
            src={jackpotImagen}
            alt="Jackpot"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              margin: '0 auto 12px',
              filter: 'drop-shadow(0 0 12px rgba(255, 190, 60, 0.7))'
            }}
          />

          <div style={{ marginTop: '8px' }}>
            <p className="m-0 p-0 text-white" style={{ fontSize: "1.5em", fontWeight:"bold" }}>Mega</p>
            <h1 className="m-0 p-0 fw-black jackpot-value" style={{
              color: '#ffd76a',
              textAlign: 'right',
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
              fontWeight: 900,
              letterSpacing: '0.04em',
              textShadow: '0 0 8px rgba(255,215,106,0.9), 0 0 18px rgba(255,170,0,0.8), 0 0 28px rgba(255,140,0,0.6)',
              background: 'linear-gradient(180deg, #fff6b3 0%, #f7c948 35%, #d79b1d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>{ jackpot.mega.toLocaleString("es-VE") }</h1>
          </div>

          <div style={{ marginTop: '10px' }}>
            <p className="m-0 p-0 text-white" style={{ fontSize: "1.5em", fontWeight:"bold" }}>Super</p>
            <h1 className="m-0 p-0 fw-black jackpot-value " style={{
              color: '#ffd76a',
              textAlign: 'right',
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
              fontWeight: 900,
              letterSpacing: '0.04em',
              textShadow: '0 0 8px rgba(255,215,106,0.9), 0 0 18px rgba(255,170,0,0.8), 0 0 28px rgba(255,140,0,0.6)',
              background: 'linear-gradient(180deg, #fff6b3 0%, #f7c948 35%, #d79b1d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>{ jackpot.super.toLocaleString("es-VE") }</h1>
          </div>

          <div style={{ marginTop: '10px' }}>
            <p className="m-0 p-0 text-white" style={{ fontSize: "1.5em", fontWeight:"bold" }}>Mini</p>
            <h1 className="m-0 p-0 fw-black jackpot-value" style={{
              color: '#ffd76a',
              textAlign: 'right',
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
              fontWeight: 900,
              letterSpacing: '0.04em',
              textShadow: '0 0 8px rgba(255,215,106,0.9), 0 0 18px rgba(255,170,0,0.8), 0 0 28px rgba(255,140,0,0.6)',
              background: 'linear-gradient(180deg, #fff6b3 0%, #f7c948 35%, #d79b1d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>{ jackpot.mini.toLocaleString("es-VE") }</h1>
          </div>
        </div>
      </>
    );
}

export default Jackpot