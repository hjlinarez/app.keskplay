import React, { useState, useEffect } from "react";

function getSegundos(segundos) {    
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(minutos)}:${pad(segundosRestantes)}`;            
}

function Evento({ sorteo, setEjecutarSorteo }) {
    const[tiempo, setTiempo] = useState(sorteo.segundos || 0);
    useEffect(() => {
                    setTiempo(sorteo.segundos || 0);
                    const intervalo = setInterval(() => {
                                                            setTiempo(prev => {
                                                                                if (prev <= 1) {
                                                                                    clearInterval(intervalo);
                                                                                    setTimeout(() => {
                                                                                                        setEjecutarSorteo(true); // ✅ aquí está seguro porque está dentro del flujo asincrónico final
                                                                                                        }, 0);
                                                                                    return 0;
                                                                                    
                                                                                }
                                                                                return prev - 1;
                                                                                });
                                                        }, 1000);
                    return () => clearInterval(intervalo);
                    }, [sorteo, setEjecutarSorteo]);

  return (
            <>
            <div className="card bg-transparent">
                <div className="card-header fs-4 text-center bg-warning text-dark fw-bold">
                    Sorteo #{sorteo.idsorteo}
                </div>
                <div className="card-body  fs-1 text-warning fw-bold text-center p-0">
                    { getSegundos(tiempo) }
                </div>
            </div>
            </>
        );
}

export default Evento;