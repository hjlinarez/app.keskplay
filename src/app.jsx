
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import Notfound from './notfound'


import Caja from './caja'
import Monitor from './components/monitor/monitor.jsx'
import Galgos from './components/galgos/monitorgalgos.jsx'
import Keno from './components/keno/monitor.jsx'
import Ruleta from './components/ruleta/ruleta.jsx'
//import Login from './components/login.jsx'
import Login from './login.jsx'

import PrivateRoute from './privateroute.jsx'

import { userSignal, tokenSignal } from './shared/userSignal.jsx';
import { urlApiSignal } from "./shared/urlApiSignal.jsx"



function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const urlApi = 'https://api.keskplay.com/api';
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            
            

            fetch(urlApiSignal.value+'/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => res.json())
            .then((response)  => {
                if (response && response.name) {
                    let userlocal = {
                                name:response.name,                             
                                parametros_keno: { 
                                                pagos: response.pagos,
                                                apuesta_minima: response.apuesta_minima,
                                                apuesta_maxima: response.apuesta_maxima,
                                                font: response.font,
                                            }
                                };
                    userSignal.value = userlocal;
                    tokenSignal.value = token;
                    localStorage.setItem('user', JSON.stringify(userlocal));
                    setLoading(false);
                    if (location.pathname === "/login" || location.pathname === "/") {
                        navigate("monitor", { replace: true });
                    }
                    
                } else {
                    userSignal.value = {};
                    tokenSignal.value = '';
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    setLoading(false);
                    navigate("/login", { replace: true });
                }
            })
            .catch((error) => {
                 userSignal.value = {};
                tokenSignal.value = '';
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                setLoading(false);
                navigate("/login", { replace: true });
            });
        }
        else{
            userSignal.value = {};
            tokenSignal.value = '';
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setLoading(false);
            if (location.pathname !== "/login") {
                navigate("/login", { replace: true });
            }
            
        }
    }, []);

    

      if (loading) return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            background:"#000000"
        }}>
            <div className="spinner"></div>
        </div>
        );

    return ( 

        
            <Routes>
                
                <Route path="/login" element={ < Login urlApi={ urlApi }/> } />                
                <Route path="/galgos" element={ <PrivateRoute>< Galgos urlApi={ urlApi }/></PrivateRoute> } />
                <Route path="/keno" element={ <PrivateRoute>< Keno urlApi={ urlApi }/></PrivateRoute> } />
                <Route path="/ruleta" element={ <PrivateRoute>< Ruleta urlApi={ urlApi }/></PrivateRoute> } />
                <Route path="/login" element={ < Login urlApi={ urlApi }/> } />                
                <Route path="*" element={ < Monitor urlApi={ urlApi }/> } />

                

            </Routes>
        
    );
}






export default App


