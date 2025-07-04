import React, { useState, useEffect } from "react";
import Sencillas from "./sencillas";
import Ranking from "./ranking";
import Exactas from "./exactas";
import Reversibles from "./reversibles";
import UltimasCarreras from "./ultimasCarreras";
import Trifectas from "./trifectas";
import Parimpar from "./parimpar";
import Altabaja from "./altabaja";
import Jackpot from "./jackpot";
import Header from "./header";
import Footer from "../footer";
import { useParams } from "react-router-dom";
import { evento } from "./js/script.js";


import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";
import podium from "../../img/podium.jpg";


import StarRain from "./StarRain";
import VideoPlayer from "./VideoPlayer";

import fondoImagen from './img/fondo.jpg';


import "./monitor.css";

function MonitorGalgos({ urlApi }) {
  useEffect(() => {
          document.body.style.backgroundImage = `url(${fondoImagen})`;
          document.body.style.backgroundSize = 'cover';
          document.body.style.backgroundRepeat = 'no-repeat';
          document.body.style.backgroundPosition = 'center';
      
          return () => {
            document.body.style.backgroundImage = '';
          };
        }, []);

  if (localStorage.getItem("zoom")) {
    document.body.style.zoom = localStorage.getItem("zoom");
  } else {
    localStorage.setItem("zoom", 1);
  }
  const [zoom, setZoom] = useState(localStorage.getItem("zoom"));
  const [userid, setUserid] = useState(0);
  const [carrera, setCarrera] = useState([]);
  const [ejemplares, setEjemplares] = useState([]);
  const [cerrandoApuestas, setCerrandoApuestas] = useState(true);
  const [mostrarjackpot, setMostrarjackpot] = useState(true);
  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(0);
  const [pos3, setPos3] = useState(0);
  const [filevideo, setFilevideo] = useState();
  const [loading, setLoading]  = useState(false)

  const [videoActivo, setVideoActivo] = useState(null);



  const validarUser = (()=>{
    setLoading(true);

    
    var data = { login: document.getElementById('usuario').value, password: document.getElementById('password').value };

    
    fetch(urlApi+'/login', {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Accept":"application/json",
        "Content-Type": "application/json",

      },
    })
      .then((res) => res.json())
      .catch((error) => { swal("Disculpe","Fallo en la conexion","error"); console.error(error); setLoading(false); })
      .then((response) => {
        
        if (response.success){
          let user = {"name":response.data.user.name, "token": response.data.user.jwt}
          localStorage.setItem('userId', JSON.stringify(response.data.user.id));
          //setUser({name: response.data.user.name, token: response.data.user.jwt})
          
          setUserid(response.data.user.id);
          //window.location.reload();
          //$('#modalLogin').modal('hide');          
        }
        else 
        {          
          swal("Disculpe",response.message,"error");
        }
        setLoading(false);
        
      } );

        //
      })
    

      const cerrarSession = ()=>{
        setCarrera([]);        
        setEjemplares([]);
        document.getElementById("div_time").innerHTML = '0:00';
        for (let i = 1; i < 9999; i++) {
          clearInterval(i); // Intenta eliminar todos los posibles intervalos
      }
        localStorage.removeItem("userId");
        setUserid(0);
        
            
    };

  useEffect(() => {
    let vzoom = localStorage.getItem("zoom");
    vzoom = Math.min(zoom, 2.5);
    vzoom = Math.max(zoom, 0.5);
    document.body.style.zoom = vzoom;
    localStorage.setItem("zoom", document.body.style.zoom);
    //console.log({ zoom })
  }, [zoom]);

  

  useEffect(() => {
    if (carrera.length > 0) {
      setEjemplares(carrera.ejemplares);
    }
  }, [carrera]);


  useEffect(() => {
   
    if (localStorage.getItem("userId")) {
      setUserid(localStorage.getItem("userId"));                  
    } 

    
  }, []);

  useEffect(()=>{
    if (userid > 0)
    {
      //
      evento(setCarrera, setEjemplares, setPos1, setPos2, setPos3, setFilevideo, filevideo, setVideoActivo);

    }else{

    }
  },[userid])



 



  


  

  return (
    <>

    <VideoPlayer videoActivo={videoActivo} setVideoActivo={setVideoActivo}/>  

    


    <div id="resultados">
            <div id="resultados-contenedor">
              <img src={ podium } className="rounded img-podium" />
              <img src={ pos1 == 1 ? btn_1 : pos1 == 2 ? btn_2 : pos1 == 3 ? btn_3 : pos1 == 4 ? btn_4 : pos1 == 5  ? btn_5 : pos1 == 6 ? btn_6 : ""} className="img-ganadora1" />
              <img src={ pos2 == 1 ? btn_1 : pos2 == 2 ? btn_2 : pos2 == 3 ? btn_3 : pos2 == 4 ? btn_4 : pos2 == 5  ? btn_5 : pos2 == 6 ? btn_6 : ""} className="img-ganadora2" />
              <img src={ pos3 == 1 ? btn_1 : pos3 == 2 ? btn_2 : pos3 == 3 ? btn_3 : pos3 == 4 ? btn_4 : pos3 == 5  ? btn_5 : pos3 == 6 ? btn_6 : ""} className="img-ganadora3" />                  
            </div>
          </div>
          

    

    <div id="div-login" className={ userid > 0 ? 'bloquear_login': 'activar_login'}>
        <div id="div-login-contenedor">
          <div className="card">
            <div className="card-header">
              Ingresar
            </div>
            <div className="card-body">
                   <form>
                   <div className="mb-3">
                      <label htmlFor="usuario" className="form-label">Usuario</label>
                      <input type="text" className="form-control" id="usuario" />
                      
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Clave</label>
                      <input type="password" className="form-control" id="password"/>
                    </div>

                    
                    <button type="button" 
                          className={loading ? 'btn btn-success disabled form-control': 'btn btn-success form-control'}
                          onClick={validarUser}>
                          <div className={ loading ? 'spinner-border' : 'spinner-border visually-hidden'} role="status"></div>
                          {loading ? 'Ingresando...' : 'Ingresar'}
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
      


      
      <div id="div-principal">

        <div className="container ">
          


      <div id="div_video"></div>
      <input type="hidden" id="text_contador" name="text_contador" />


            <Header carrera = { carrera }  urlApi={urlApi}/>

            <div className="row mt-2">
              
              <div className="col-lg-5">
                <Sencillas ejemplares={ejemplares} />
              </div>
              <div className="col">
                <Exactas carrera={carrera} />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Reversibles carrera={ carrera }/>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-lg-7">
                <UltimasCarreras carrera={carrera} />

              </div>
              <div className="col">
                <div className="row mt-2">
                  <div className="col">
                    <Parimpar carrera={carrera} />
                  </div>
                  <div className="col">
                    <Altabaja carrera={carrera} />
                  </div>
                </div>
                
              </div>
            </div>
            
            
        
        
      </div>

      </div>

      <Footer />
      
    </>
  );
}

export default MonitorGalgos;
