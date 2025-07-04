


export function evento(setCarrera, setEjemplares, setPos1, setPos2, setPos3, setFilevideo, filevideo, setVideoActivo ) {


    fetch('https://api.keskplay.com/api/galgos/carrera')
        .then(response => response.json())
        .then(
                function(data){
                   if (data.idevento > 0) 
                   {

                    document.querySelector("#div_evento").innerHTML = data.idevento;                                                            
                    document.querySelector("#text_contador").value = data.segundos;
                    
                    setCarrera(data);                    
                    setEjemplares(data.ejemplares)

                    let barra_progeso = '<div class="progress"><div id="div_barra_progreso" class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 0%" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div></div>';

                    let servidor = 'https://filesmsb.sfo3.cdn.digitaloceanspaces.com/galgos/';
                    let videoMP4_0 = servidor+data.videoMP4;
                    let idfantasma = 1;
                    let video_carrera = document.getElementById("div_video");
                    
                    
                    
                    //videos.classList.toggle("oculto");
                    //video_carrera.innerHTML = '<video id="video_carrera" preload><source src="'+videoMP4_0+'?'+idfantasma+'" type="video/mp4"/></video>';
                    //document.querySelector("#section_barra_progreso").innerHTML = barra_progeso;
                    

                    let idInterval = setInterval(function(){

                        var contador = document.getElementById("text_contador");
                        let cont = contador.value;
                        cont--;   
                        let porcentaje_barra = 100 - (cont *100 / 180);
                        document.querySelectorAll("#div_barra_progreso").forEach(function(element) {
                            element.style.width = porcentaje_barra+"%";                            
                        });
                        
                        if (cont == 120)
                        {
                            //load_videos(data);
                        }
                        if (cont == 60)
                        {
                            //load_videos(data);
                        }

                        //EL JACKPOT SE ACTUALIZA HASTA EL SEGUNDO 15
                        if (cont >=30)
                        {
                            //jackpot(userid);
                        }
                        
                        
                        if (cont >=16 && cont <= 30)
                        {
                            //document.querySelector("#div_barra_progreso").classList.remove("bg-success");
                            //document.querySelector("#div_barra_progreso").classList.remove("bg-danger");
                            //document.querySelector("#div_barra_progreso").classList.add("bg-warning");
                        }

                        if (cont <= 15)
                        {
                            //document.querySelector("#div_barra_progreso").classList.remove("bg-success");
                            //document.querySelector("#div_barra_progreso").classList.remove("bg-warning");
                            //document.querySelector("#div_barra_progreso").classList.add("bg-danger");
                        }

                        if (cont == 0)
                        {
                            clearInterval(idInterval);                            
                            correr_video(data, setPos1, setPos2, setPos3, setVideoActivo);                            
                            //let idevento = document.querySelector("#idevento").innerHTML;
                            

                            //document.getElementById("video_1").play();  
                            //blanquear_pizarra();   
                            //console.log("preparar_sorteo");
                            //preparar_sorteo(idsorteo, userid);                         
                            
                            
                            //setTimeout(function () { location.reload();}, 25000); //40000
                            //setTimeout(function () { mostrar_sorteo();}, 40000);
                            //mostrar_sorteo();
                        }


                        if (cont < 0)
                        {
                            return false;
                        }


                        let cont_new = cont ;

                        
                        var hours = Math.trunc( cont_new / 3600 );  
                        var minutes = Math.trunc( (cont_new % 3600) / 60 );
                        var seconds = cont_new % 60;           
                        //Anteponiendo un 0 a los minutos si son menos de 10 
                        hours = hours < 10 ? '0' + hours : hours;
                        minutes = minutes < 10 ? '0' + minutes : minutes;
                        //Anteponiendo un 0 a los segundos si son menos de 10 
                        seconds = seconds < 10 ? '0' + seconds : seconds;
                        if (cont >= 0)
                        {      
                            document.getElementById("text_contador").value = cont;
                            document.getElementById("div_time").innerHTML = minutes+":"+seconds;      
                            if (cont >=15)
                            {
                                
                            }
                        }
                        else
                        {
                            //$("#div_segundos").html("Jugando");
                        }
                        

                },1000);

                   }
                }
            
            );



}


export function correr_video(data, setPos1, setPos2, setPos3, setVideoActivo)
{
    
    /*let principal = document.getElementById("div-principal");
    let video = document.getElementById("div_video");
    
    
    
    principal.style.display = "none";
    video.style.display = "block";
    
    
    


    if (video_carrera.paused)
        video_carrera.play();
    else
        video_carrera.pause();*/

        let video_carrera = document.getElementById("video_carrera");
        setVideoActivo(0);
        video_carrera.addEventListener("ended", function() {
            setTimeout(function () {                 
                    setPos1(data.POS1);
                    setPos2(data.POS2);
                    setPos3(data.POS3);
                    document.getElementById("resultados").style.display = "flex";
                }, 0);
            setTimeout(function () { window.location.reload(); }, 10000);
            //alert("El video ha terminado.");
            
            
            
        });



}

function mostrar_resultados()
{

}