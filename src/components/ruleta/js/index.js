let cont = 0;
sessionStorage.setItem("flag_ingreso", false);
sessionStorage.setItem("status_internet", "");
sessionStorage.setItem("momento", "");

function verificar_conexion() 
{
    if (comprobarinternet())
    {
        $('#myCargandoJuegos').css('visibility','hidden');        
        let flag_ingreso    = sessionStorage.getItem("flag_ingreso");    
        let status_internet    = sessionStorage.getItem("status_internet");  
        let momento    = sessionStorage.getItem("momento");       
        if (flag_ingreso && status_internet == 'se fue')
        {
            window.location.reload()
            sessionStorage.setItem("status_internet", "conectado");
            document.querySelector(".cajaRuleta").innerHTML = '<img src="img/ruleta_2023.png?222s" class="sorteo">';
            document.querySelector(".girbola").innerHTML = '<img src="img/bola.png?12" class="bola">';
            //alert("reinicio");            
        }
    }
    else 
    {
        $('#myCargandoJuegos').css('visibility','visible');
        sessionStorage.setItem("status_internet", "se fue");
    }
    
} 

function comprobarinternet()
{
    if(navigator.onLine) {        
        return true;
    } else {             
        return false;            
    }
}




export function EjecutarRuleta(valor)
{
    if (comprobarinternet() == false)
    {        
        return false;
    }

    var x = document.getElementById("myAudio");
    x.play(); 

    //var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38 ]; // lotería

    let valores_aceptados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]; // lotería
    if (valores_aceptados.includes(valor) == false)
    {
        console.log('Valor no aceptado');
        return false;
    }
    //data Para resultados aleatorios, según la probabilidad del resultado
    // 1 ~ 38 números aleatorios (en data meto el número de parada)
    var sincro=0;
    //data = data[Math.floor(Math.random() * data.length)];
    //data=1;
    sincro = Math.floor(Math.random() * 360);
    var ronda = 10; // tiempos iniciales, introducidos por el fondo
    var isture = 0;

    let data = valor;
    if (data == 0) data = 37;
    
 

    
    switch (data) {
            case 1:
                rotateFunc(1, 224+sincro, 'Uno');
                break;
            case 2:
                rotateFunc(2, 58+sincro, 'Dos');
                break;
            case 3:
                rotateFunc(3, 341+sincro, 'Tres');
                break;
            case 4:
                rotateFunc(4, 39+sincro, 'Cuatro');
                break;
            case 5:
                rotateFunc(5, 185+sincro, 'Cinco');
                break;
            case 6:
                rotateFunc(6, 97+sincro, 'Seis');
                break;
            case 7:
                rotateFunc(7, 302+sincro, 'Siete');
                break;
            case 8:
                rotateFunc(8, 156+sincro, 'Ocho');
                break;
            case 9:
                rotateFunc(9, 263+sincro, 'Nueve');
                break;
            case 10:
                rotateFunc(10, 175+sincro, 'Diez');
                break;
            case 11:
                rotateFunc(11, 136+sincro, 'Once');
                break;
            case 12:
                rotateFunc(12, 321+sincro, 'Doce');
                break;
            case 13:
                rotateFunc(13, 117+sincro, 'Trece');
                break;
            case 14:
                rotateFunc(14, 243+sincro, 'Catorce');
                break;
            case 15:
                rotateFunc(15, 20+sincro, 'Quince');
                break;
            case 16:
                rotateFunc(16, 204+sincro, 'Dieciseis');
                break;
            case 17:
                rotateFunc(17, 78+sincro, 'Diecisiete');
                break;
            case 18:
                rotateFunc(18, 282+sincro, 'Diesiocho');
                break;
            case 19:
                rotateFunc(19, 30+sincro, 'Diesinueve');
                break;
            case 20:
                rotateFunc(20, 234+sincro, 'Veinte');
                break;
            case 21:
                rotateFunc(21, 48+sincro, 'Ventiuno');
                break;
            case 22:
                rotateFunc(22, 273+sincro, 'Ventido');
                break;
            case 23:
                rotateFunc(23, 165+sincro, 'Ventitres');
                break;
            case 24:
                rotateFunc(24, 195+sincro, 'Venticuatro');
                break;
            case 25:
                rotateFunc(25, 68+sincro, 'Venticinco');
                break;
            case 26:
                rotateFunc(26, 350+sincro, 'Ventiseis');
                break;
            case 27:
                rotateFunc(27, 106+sincro, 'Ventisiete');
                break;
            case 28:
                rotateFunc(28, 312+sincro, 'Ventiocho');
                break;
            case 29:
                rotateFunc(29, 292+sincro, 'Ventinueve');
                break;
            case 30:
                rotateFunc(30, 146+sincro, 'Treinta');
                break;
            case 31:
                rotateFunc(31, 253+sincro, 'Treinta y uno');
                break;
            case 32:
                rotateFunc(32, 10+sincro, 'Treinta y dos');
                break;
            case 33:
                rotateFunc(33, 215+sincro, 'Treinta y tres');
                break;
            case 34:
                rotateFunc(34, 87+sincro, 'Treinta y cuatro');
                break;
            case 35:
                rotateFunc(35, 331+sincro, 'Treinta y cinco');
                break;
            case 36:
                rotateFunc(36, 127+sincro, 'Treinta y seis');
                break;
            case 37:
                rotateFunc(0, 0+sincro, 'Cero');
                break;
        
        }


        


        switch(data) {
            case 1:
                rotateBola(1, sincro);
                break;
            case 2:
                rotateBola(2, sincro);
                break;
            case 3:
                rotateBola(3, sincro);
                break;
            case 4:
                rotateBola(4, sincro);
                break;
            case 5:
                rotateBola(5, sincro);
                break;
            case 6:
                rotateBola(6, sincro);
                break;
            case 7:
                rotateBola(7, sincro);
                break;
            case 8:
                rotateBola(8, sincro);
                break;
            case 9:
                rotateBola(9, sincro);
                break;
            case 10:
                rotateBola(10, sincro);
                break;
            case 11:
                rotateBola(11, sincro);
                break;
            case 12:
                rotateBola(12, sincro);
                break;
            case 13:
                rotateBola(13, sincro);
                break;
            case 14:
                rotateBola(14, sincro);
                break;
            case 15:
                rotateBola(15, sincro);
                break;
            case 16:
                rotateBola(16, sincro);
                break;
            case 17:
                rotateBola(17, sincro);
                break;
            case 18:
                rotateBola(18, sincro);
                break;
            case 19:
                rotateBola(19, sincro);
                break;
            case 20:
                rotateBola(20, sincro);
                break;
            case 21:
                rotateBola(21, sincro);
                break;
            case 22:
                rotateBola(22, sincro);
                break;
            case 23:
                rotateBola(23, sincro);
                break;
            case 24:
                rotateBola(24, sincro);
                break;
            case 25:
                rotateBola(25, sincro);
                break;
            case 26:
                rotateBola(26, sincro);
                break;
            case 27:
                rotateBola(27, sincro);
                break;
            case 28:
                rotateBola(28, sincro);
                break;
            case 29:
                rotateBola(29, sincro);
                break;
            case 30:
                rotateBola(30, sincro);
                break;
            case 31:
                rotateBola(31, sincro);
                break;
            case 32:
                rotateBola(32, sincro);
                break;
            case 33:
                rotateBola(33, sincro);
                break;
            case 34:
                rotateBola(34, sincro);
                break;
            case 35:
                rotateBola(35, sincro);
                break;
            case 36:
                rotateBola(36, sincro);
                break;
            case 37:
                rotateBola(37, sincro);
                break;
            case 38:
                rotateBola(38, sincro);
                break;
        };
    



}




function rotateFunc(awards, angle, text) 
{
        
        var $btn = $('#img-sorteo');
        var isture = true;
        $btn.stopRotate();
        $btn.rotate({
            angle: 0, // El ángulo de rotación
            duration: 15000, // Girar el tiempo
            animateTo: angle - 1440, // Dado el ángulo, permite que agregue una rotación de 1440 grados según el resultado
            
            
            callback: function() {
             isture = false; 
             // Carga el ganador en el display
             // document.getElementById("display").value=(text);

                    $(".regla").on('click', function() 
                    {
                        
                    });


            }
        });
};



function rotateBola(awards, angle) 
{
        
        var $btn = $('#img-bola');
        var isture = true;
        $btn.stopRotate();
        $btn.rotate({
            angle: 0, // El ángulo de rotación
            duration: 15000, // Girar el tiempo
            animateTo: angle + 1440, // Dado el ángulo, permite que agregue una rotación de 1440 grados según el resultado
            
            
            callback: function() {
             isture = false; 
             // Carga el ganador en el display
                //var audio = "myAudio_"+awards
                //var x = document.getElementById(audio);
                //x.play(); 

                document.getElementById("myAudio_"+awards).play();
                /*setTimeout(function () { xajax_mostrar_resultado(awards); }, 0);*/
                //setTimeout(function () { inicio();}, 0);

                


            }
        });
};


function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
  // Lanza en pantalla completa en navegadores que lo soporten
   function cancelFullScreen() {
       if(document.cancelFullScreen) {
           document.cancelFullScreen();
       } else if(document.mozCancelFullScreen) {
           document.mozCancelFullScreen();
       } else if(document.webkitCancelFullScreen) {
           document.webkitCancelFullScreen();
       }
   }



function verificarjackpot(idsorteo, setMostrarjackpot) {
  const iduser = localStorage.getItem("userId");

  fetch(`https://api.keskplay.com/api/ruleta/totaljackpot/${iduser}/${idsorteo}`, {
    headers: { "Accept": "application/json" }
  })
    .then(async (res) => {
      const contentType = res.headers.get("content-type");

      if (res.ok && contentType && contentType.includes("application/json")) {
        const response = await res.json();
        console.log("Respuesta del jackpot:", response);

        if (parseFloat(response.total_jackpot) > 0) {
          setMostrarjackpot(true);
          setTimeout(() => setMostrarjackpot(false), 5000);
        }
      } else {
        const text = await res.text();
        console.warn("Respuesta no-JSON recibida:", text);
        throw new Error("Respuesta no es JSON");
      }
    })
    .catch((error) => {
      console.error("Error al consultar jackpot:", error);
    });
}



export function resultadoSorteo(idsorteo, fetchSorteo, setMostrarjackpot)
   {
    const myInterval = setInterval(function(){     
                            fetch('https://api.keskplay.com/api/ruleta/sorteo/'+idsorteo)
                            .then(response => response.json())
                            .then(function (data){
                                                    if (data.cerrada == 1){                            
                                                        console.log(parseInt(data.numero));
                                                        clearInterval(myInterval);
                                                        EjecutarRuleta(parseInt(data.numero));
                                                        setTimeout(() => {
                                                            fetchSorteo();    
                                                            verificarjackpot(idsorteo, setMostrarjackpot);
                                                        }, 15000);
                                                        
                                                    }
                                                    else{
                                                        console.log("Sorteo no ha sido cerrado");
                                                    }
                                    })                
                            },1000);    
   }

function contador_segundos()
{
    
    
        let cont = document.querySelector("#text_contador").value;			
        cont--;	
        document.querySelector("#text_contador").value = cont;



        var hours = Math.trunc( cont / 3600 );  
            var minutes = Math.trunc( (cont % 3600) / 60 );
            var seconds = cont % 60;					 
            //Anteponiendo un 0 a los minutos si son menos de 10 
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            //Anteponiendo un 0 a los segundos si son menos de 10 
            seconds = seconds < 10 ? '0' + seconds : seconds;


    

    if (hours > 0)
    {
        //$("#div_segundos").html("Inicia en: "+hours+" horas "+minutes+" min. "+seconds+ " seg.");
        $("#div_segundos").html(hours+":"+minutes+":"+seconds);
    }
    else
    {
        if (minutes > 0)
        {
            //$("#div_segundos").html("Inicia en: "+minutes+" min. "+seconds+ " seg.");
            $("#div_segundos").html(minutes+":"+seconds);
        }
        else
        {
            if (seconds > 0)
            {
                //$("#div_segundos").html("Inicia en: "+seconds+ " seg.");
                $("#div_segundos").html("00:"+seconds);
            }
            else
                $("#div_segundos").html("Jugando...");
        }
    }

    if (comprobarinternet())
    {
        let momento = document.querySelector("#div_segundos").textContent;		
        sessionStorage.setItem("momento", momento);
    }

    if (cont > 0 && cont < 21)
    {
        document.querySelector("#div_segundos").classList.remove("div_segundos");
        document.querySelector("#div_segundos").classList.add("div_segundos_rojo");
    }

    if (cont == 0)
    {					
        //xajax_ejecutar_ruleta();	
        document.querySelector("#div_segundos").classList.remove("div_segundos_rojo");
        document.querySelector("#div_segundos").classList.add("div_segundos");

        let idsorteo = document.querySelector("#div_evento").innerHTML;


        const myInterval = setInterval(function(){     
            fetch('https://api.keskplay.com/api/ruleta/sorteo/'+idsorteo)
            .then(response => response.json())
            .then(function (data){

                        if (data.cerrada == 1){
                            
                            console.log(parseInt(data.numero));
                            clearInterval(myInterval);
                            ejecutar_ruleta(parseInt(data.numero));
                            setTimeout(() => {
                                                fetch('https://mysoftbet.co/app/ruleta/api/sorteo.php')
                                                .then(response => response.json())
                                                .then(
                                                    function (data)
                                                    {
                                                        document.querySelector("#text_contador").value=data.segundos;
                                                        document.querySelector("#div_evento").innerHTML =data.idsorteo;
                                                        mostrar_sorteo(data);
                                                    }
                                                );
                                            }, 15000);
                        }
                        else{
                            console.log("Sorteo no ha sido cerrado");
                        }
                    }
                    )

                
            },1000);
    
            
            
            
           	
    }
}



function mostrar_sorteo(data)
{
   
    $('#myCargandoJuegos').css('visibility','hidden');
    let historial = data.ultimos_resultados;
    let ultimos120sorteos = data.ultimos120sorteos;

    let tabla = '<table class=" " width="100%" style="height:17.5em; font-size:0.83em">\
				        <tbody>\
                        </tbody>\
                        <thead>';

    let rojas = ['1','3','5','7','9','12','14','16','18','19','21','23','25','27','30','32','34','36'];
    historial.map(function(valor,index){
        
        if (valor.numero === '0')
        {
            tabla += '<tr><td>'+valor.idsorteo+'</td><td><span class="badge badge-verde">'+valor.numero+'</span></td></tr>';
        }
        else{
            if (rojas.includes(valor.numero))
                tabla += '<tr><td>'+valor.idsorteo+'</td><td><span class="badge badge-roja">'+valor.numero+'</span></td></tr>';
            else 
                tabla += '<tr><td>'+valor.idsorteo+'</td><td><span class="badge badge-negra">'+valor.numero+'</span></td></tr>';

        }
       
        
        
    });
    tabla += '</thead></table>';
    document.querySelector("#div_historico_sorteos").innerHTML=tabla;


    let tabla_12_sorteos;
    let opciones ='';

    let veces_verdes=0;
    let veces_rojas=0;
    let veces_negras=0;

    
    

    ultimos120sorteos.map(function(valor, index) {
        //console.log (valor);
        if (valor.numero ==0)
        {
            opciones += '<span class="badge badge-verde badge-historial col-lg-12">'+valor.numero+' <span class="badge badge-light">'+valor.veces+'</span></span>';
            veces_verdes += valor.veces;
        }
        else{

            if (rojas.includes(valor.numero)){
                opciones += '<span class="badge badge-roja badge-historial col-lg-4">'+valor.numero+' <span class="badge badge-light">'+valor.veces+'</span></span>';
                veces_rojas += valor.veces;
            }
            else {
                opciones += '<span class="badge badge-negra badge-historial col-lg-4">'+valor.numero+' <span class="badge badge-light">'+valor.veces+'</span></span>';
                veces_negras += valor.veces;
            }
            
        }
        
    });

    opciones += '<hr><div class="row">\
                    <div class="col-lg-12">\
                        <span class="badge badge-verde badge-historial col-lg-4">'+veces_verdes+'</span>\
                        <span class="badge badge-roja badge-historial col-lg-4">'+veces_rojas+'</span>\
                        <span class="badge badge-negra badge-historial col-lg-4">'+veces_negras+'</span>\
                    </div>\
                </div>';


   
    document.querySelector("#div_ultimos_120_sorteos").innerHTML=opciones;




    //document.querySelector("#div_historico_sorteos").innerHTML='<h1>Hola</h1>';
}



function inicio()
{
    sessionStorage.setItem("flag_ingreso", true);
	sessionStorage.setItem("status_internet", "conectado");	
    fetch('https://mysoftbet.co/app/ruleta/api/sorteo.php')
    .then(response => response.json())
    .then(
        function (data)
        {
            
            document.querySelector("#text_contador").value=data.segundos;
            document.querySelector("#div_evento").innerHTML =data.idsorteo;
            mostrar_sorteo(data);

            setInterval(function(){     
                contador_segundos()               
                verificar_conexion();

                
            },1000);
        }
    );
    

    
    


}


