

export function mostrar_sorteo(userid) {

    fetch('https://api.keskplay.com/api/keno/sorteo')
        .then(response => response.json())
        .then(
                function(data){
                    
                    document.querySelector("#idsorteo").innerHTML = data.idsorteo;                    
                    //document.querySelector("#div_segundos").innerHTML = data.segundos;
                    document.querySelector("#text_contador").value = data.seg_monitor;


                    document.querySelector("#img_factores").style.display  = 'block';
                    document.querySelector("#img_jackpot").style.display = 'none';

                    

                    


                    load_videos(data);
                    

                    let porcentaje_inicial = data.segundos * 100 / 180;
                    // coloca la barra de progreso
                    let barra_progeso = '<div class="progress">\
                                            <div id="div_barra_progreso" class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 0%" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>\
                                        </div>';

                        
                    document.querySelector("#section_barra_progreso").innerHTML = barra_progeso;

                    


                    //document.querySelector("#text_contador").value = 15;
                    
                    let resultados = data.ultimos_resultados;
                    let cuerpo_tabla = '';
                    resultados.forEach(function(resultado, index){
                        if(index==0){
                            marcar_sorteo(resultado.resultado);
                        }
                        let xx = '<div class="bola_resultado">'+resultado.resultado_ordenado.replaceAll(';','</div><div class="bola_resultado">')+'</div>';
                        
                        cuerpo_tabla+='<tr><td>'+resultado.idsorteo+'</td><td>'+xx+'</td></tr>';
                    })
                    
                    let tabla = '<table class="table table-sm" width="90%">\
                                '+cuerpo_tabla+'\
                                </table>';
                document.querySelector("#idresultados").innerHTML = tabla;
                //jackpot(userid);

                //let myJackpot = setInterval(function(){ jackpot(userid) },10000);

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
                            document.querySelector("#div_barra_progreso").classList.remove("bg-success");
                            document.querySelector("#div_barra_progreso").classList.remove("bg-danger");
                            document.querySelector("#div_barra_progreso").classList.add("bg-warning");
                        }

                        if (cont <= 15)
                        {
                            document.querySelector("#div_barra_progreso").classList.remove("bg-success");
                            document.querySelector("#div_barra_progreso").classList.remove("bg-warning");
                            document.querySelector("#div_barra_progreso").classList.add("bg-danger");
                        }

                        if (cont == 0)
                        {
                            clearInterval(idInterval);
                            let idsorteo = document.querySelector("#idsorteo").innerHTML;

                            //document.getElementById("video_1").play();  
                            blanquear_pizarra();   
                            console.log("preparar_sorteo");
                            preparar_sorteo(idsorteo, userid);                         
                            
                            
                            setTimeout(function () { location.reload();}, 25000); //40000
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
                            document.getElementById("div_segundos").innerHTML = minutes+":"+seconds;      
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
            
            );
}


function load_videos(data)
{
    let videos = '';
    let visibilidad;

    visibilidad = 'block';

    data.videos.forEach(function(item, index){
        let nombrevideo = item["resultado"].replaceAll(';','');
        videos += '<video id="video_'+nombrevideo+'" width="100%" class="video rounded" style="display:'+visibilidad+'" >\
                    <source src="https://filesmsb.sfo3.cdn.digitaloceanspaces.com/keno/'+item["video"]+'" type="video/webm">\
                </video>';
        visibilidad = 'none';
    });

    document.querySelector("#videos").innerHTML = videos;

    

    
}



function marcar_sorteo(resp)
{
    let resultado = resp.split(';');


    document.querySelector("#bola_1").innerHTML = resultado[0];
    document.querySelector("#bola_2").innerHTML = resultado[1];
    document.querySelector("#bola_3").innerHTML = resultado[2];
    document.querySelector("#bola_4").innerHTML = resultado[3];
    document.querySelector("#bola_5").innerHTML = resultado[4];
    document.querySelector("#bola_6").innerHTML = resultado[5];
    document.querySelector("#bola_7").innerHTML = resultado[6];
    document.querySelector("#bola_8").innerHTML = resultado[7];
    document.querySelector("#bola_9").innerHTML = resultado[8];
    document.querySelector("#bola_10").innerHTML = resultado[9];
    document.querySelector("#bola_11").innerHTML = resultado[10];
    document.querySelector("#bola_12").innerHTML = resultado[11];
    document.querySelector("#bola_13").innerHTML = resultado[12];
    document.querySelector("#bola_14").innerHTML = resultado[13];
    document.querySelector("#bola_15").innerHTML = resultado[14];
    document.querySelector("#bola_16").innerHTML = resultado[15];
    document.querySelector("#bola_17").innerHTML = resultado[16];
    document.querySelector("#bola_18").innerHTML = resultado[17];
    document.querySelector("#bola_19").innerHTML = resultado[18];
    document.querySelector("#bola_20").innerHTML = resultado[19];

    document.querySelector("#celda_"+resultado[0]).className = "table_80_1_marcado";    
    document.querySelector("#celda_"+resultado[1]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[2]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[3]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[4]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[5]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[6]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[7]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[8]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[9]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[10]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[11]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[12]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[13]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[14]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[15]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[16]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[17]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[18]).className = "table_80_1_marcado";
    document.querySelector("#celda_"+resultado[19]).className = "table_80_1_marcado";




    
}



function jackpot(userid)
{
    /*let sorteo = document.querySelector("#idsorteo").innerHTML;
    fetch('https://api.keskplay.com/api/keno/jackpot/'+userid+'/'+sorteo)
        .then(response => response.json())        
        .then(
                function(data)
                {
                    //let monto_jackpot = new Intl.NumberFormat().format(data.monto);
                    if (data.monto != 0)                    
                    document.querySelector("#mini_jackpot").innerHTML= new Intl.NumberFormat().format(data.mini);
                    document.querySelector("#super_jackpot").innerHTML= new Intl.NumberFormat().format(data.super);
                    document.querySelector("#mega_jackpot").innerHTML= new Intl.NumberFormat().format(data.mega);
                }
            )            */                
           
}




function preparar_sorteo(idsorteo, userid)
{
    
    const myInterval = setInterval(function(){     
    
        fetch('https://api.keskplay.com/api/keno/resultado/'+userid+'/'+idsorteo)
            .then(response => response.json())
            .then(
                    function(data)
                    {
                        if (data.cerrado == 1)
                        {
                            console.log("Sorteo cerrado correctamente");
                            clearInterval(myInterval);
                            let inicio = 0;
                            let bola = 0;
                            let video = "video_"+data.resultado.replaceAll(';','');
                            let resultados = data.resultado.split(';');
                            let jackpot = data.jackpot;
                            //console.log(jackpot);
                            const videos = [...document.querySelectorAll(".video")];
                            videos.forEach(function(elemento, index, arreglo) {
                                            let valor = arreglo[index].id;    
                                            document.getElementById(valor).style.display='none';
                                        });

                            document.getElementById(video).style.display='block';
                            document.getElementById(video).playbackRate=1.5;

                            document.getElementById(video).play();

                            setTimeout(function () { 
                            
                            resultados.forEach(function(elemento, index, arreglo){
                                                        let valor = arreglo[index];
                                                        inicio += 660;    //880                                            
                                                        setTimeout(function () {    
                                                            bola += 1;                                                 
                                                            document.getElementById("celda_"+valor).classList.remove("table_80_1");
                                                            document.getElementById("celda_"+valor).classList.add("table_80_1_marcado");
                                                            document.querySelector("#bola_"+bola).innerHTML = valor;
                                                        }, inicio);

                                        });

                                    }, 5000); //8000


                                    
                            if (jackpot > 0)
                            {
                                setTimeout(function () { 
                                    document.getElementById('img_factores').classList.add("hidden");
                                    
                                    }, 18000); //28000
                                setTimeout(function () { 
                                    
                                    document.querySelector("#img_factores").style.display  = 'none';
                                    document.querySelector("#img_jackpot").style.display = 'block';
                                    }, 19500); // 29000
                            }



                        }
                        else{
                            console.log("Sorteo no ha sido cerrado");
                        }
                    }
                );

    },1000);

}


function blanquear_pizarra()
{
   // document.querySelectorAll(".bola").innerHTML = '';
    let inicio = 0;
    const bolas = [...document.querySelectorAll(".bola")];
    bolas.forEach(function(elemento, index, arreglo) {
            let valor = arreglo[index].innerHTML;                  
            setTimeout(function () { 
                    arreglo[index].innerHTML = "";
                    document.getElementById("celda_"+valor).classList.remove("table_80_1_marcado");
                    document.getElementById("celda_"+valor).classList.add("table_80_1");
                }, inicio);
            inicio += 150;
        });

    const pizarra = [...document.querySelectorAll(".table_80_1_marcado")];    
    pizarra.forEach(function(elemento, index, arreglo) {
            //arreglo[index].classList.remove("table_80_1_marcado");
            //arreglo[index].classList.add("table_80_1");
        });
    
    
}