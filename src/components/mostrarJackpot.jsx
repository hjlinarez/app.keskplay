import React, { useState, useEffect } from "react";
import jackpot from '../img/jackpot.png';
import './mostrarJackpot.css';

function Mostrarjackpot({ mostrarJackpot }){

   

     return (
        <div>
    
            
            {mostrarJackpot && (
                <div style={jackpotStyles}>
                    <div style={mensajeStyles}><img src={ jackpot} style={imagenEstilo} id="img-mostrar-jackpot"  /></div>
                </div>
            )}
        </div>
    );

}
// Estilos para el overlay
const jackpotStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo negro con 50% de transparencia
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Asegura que esté por encima de otros elementos
};

// Estilos para el mensaje
const mensajeStyles = {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
};

  const imagenEstilo = {
  maxWidth: '80%',
  maxHeight: '80%',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.7)',
  borderRadius: '10px',
  animation: 'zoomIn 1.2s ease-out infinite',
  transition: 'transform 0.3s ease',
  
};


export default Mostrarjackpot;