import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Login from './components/login.jsx'
import swal from 'sweetalert';
import Menu from './components/menu.jsx'
import Resumenventa from './components/resumenventa.jsx'
import FormatNumeric from './components/formatNumeric.jsx';
import Ticket from './components/ticket.jsx';
import Footer from './components/footer.jsx';
import './caja.css'




function caja({ urlApi }) {

    if (localStorage.getItem('zoom')){    
        document.body.style.zoom = localStorage.getItem('zoom');
    }
    else{
        localStorage.setItem('zoom', 1);
    }    


    let objetoticket = { 
        idticket: '',
        estatus: '',
        fecha_ticket: '',
        apuestatotal: 0,
        totalpremio:0,
        pagado:0,
        pendiente:0,
        resultado_sorteo:'',
        jugadas:[]
    };
    
    const hoy = new Date();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    const [zoom, setZoom] = useState(localStorage.getItem('zoom'));

    useEffect(()=>{
        let vzoom = localStorage.getItem('zoom');
        vzoom = Math.min(zoom, 2.5);
        vzoom = Math.max(zoom, 0.5); 
        document.body.style.zoom = vzoom;
        localStorage.setItem('zoom', document.body.style.zoom);
        //console.log({ zoom })

    },[zoom])

    const[ticketsUser, SetTicketsUser ] = useState([]) // este use stat contiene la informacion de los tickets realizados del usuario


    

    const uploadTicket = () => {

        

        if (localStorage.getItem("user")){
            
            let userLocal = JSON.parse(localStorage.getItem("user"));
            if (userLocal.token.length == 0) return ;
            let token = "Bearer " + userLocal.token;                
            fetch(urlApi+'/keno/ticketsuser', {
                method: "GET", // or 'PUT'            
                headers: {
                  "Accept":"application/json",
                  "Content-Type": "application/json",
                  "Authorization": token
                },
              }) 
                .then((res) => res.json())
                .catch((error) => errorConexion())
                .then((response) => {                       
                        
                        if (response.data)
                        {                            
                            SetTicketsUser(response.data);
                        }
                        else
                        {                            
                            SetTicketsUser([]);
                        }
                        

                        } );
             
        }
        else{
            
            console.log('NO EXISTE');
        }
    }





    const [ticketPrintNew, SetTicketPrintNew] = useState(null);


    const [totalJugadas, setTotalJugadas] = useState()
    const [user, setUser] = useState({})
    const [usersaldo, setUserSaldo] = useState({moneda:'', monto: 0})    
    const [cerrandoApuestas, setCerrandoApuestas] = useState(false)
    //const [imprimir, setImprimir] = useState(null)
    const [ticketPrint, setTicketPrint] = useState([])
    const [ticketsAnular, setTicketsAnular] = useState([]);
    const [ticketsPagar, setTicketsPagar] = useState([]);
    const [idticketPagar, setIdticketpagar] = useState({ 'idticket': 0, 'serial':0, 'pago_pendiente': 0});
    const [serialPago, setSerialpago] = useState('');
    const [numerosorteo, setNumerosorteo] = useState(0);
    const [segundosSorteo, setSegundosSorteo] = useState(null);
    const [segundosmostrar, setSegundosmostrar] = useState('');

    const [pagos, setPagos] = useState([]);



    const [inputJugada, setInputJugada] = useState('');

    const [ btnPrint, setBtnPrint] = useState(true)

    //STATE DEL RESUMEN DE VENTA
    const [desde, setDesde] = useState(fechahoy("ENG"))
    const [hasta, setHasta] = useState(fechahoy("ENG"))
    const [rangofecha, setRangofecha] = useState(fechahoy("ESP")+'-'+fechahoy("ESP"))
    const [loadingResumenVenta, setLoadingResumenVenta] = useState(true)
    const [data, setData] = useState([]);
    
    // contiene la informacion de las ultimas jugadas realizadas
    const [ultimasjugadas, setUltimasjugadas] = useState([]);

    const [myticket, setMyticket] = useState(objetoticket);
    const [myticketConsulta, setMyticketConsulta] = useState(undefined);



    const SeleccionarTicket = () => {
        let idticket =  myticketConsulta ;
        ConsultarTicket(idticket);
    }
  
    const ConsultarTicket = (idticket) => {
      //const urlApi = 'http://localhost:8000/api';
  
      if (localStorage.getItem("user")) {
        let userLocal = JSON.parse(localStorage.getItem("user"));
        if (userLocal.token.length == 0) return;
        //let ticket = document.querySelector("#idticketbuscar").value;
        //ticket = parseInt(ticket);
        let ticket =   idticket  ;
        if (isNaN(ticket)) {
          swal("Error", "Numero de ticket invalido", "error");
          return;
        }
  
        let token = "Bearer " + userLocal.token;
        fetch(urlApi + "/keno/ticket/" + ticket, {
          method: "GET", // or 'PUT'
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .catch((error) => {
            swal("Error", "Indique el numero del ticket", "error");
          })
          .then((response) => {
            if (response.message != "Unauthenticated.") {
              if (response.success) {                
                setMyticket(response.data);
                $("#ConsultarTicketModal")
                  .modal("show")
                  .on("show.bs.modal", () => {
                    
                  })
                  .on("hide.bs.modal	", () => {});
              } else {
                swal("Los siento!!!", response.message, "error");
              }
            }
          });
      } else {
        //let userLocal = {'name':'', 'token':''};
        //localStorage.setItem('user', JSON.stringify(userLocal));
        //setUser(JSON.parse(userLocal));
        console.log("NO EXISTE");
      }
    };
  


    useEffect(()=>{
        
        
        if (localStorage.getItem("user")){
            
            let userLocal = JSON.parse(localStorage.getItem("user"));
            if (userLocal.token.length == 0) return ;
            let token = "Bearer " + userLocal.token;                
            fetch(urlApi+'/user', {
                method: "POST", // or 'PUT'            
                headers: {
                  "Accept":"application/json",
                  "Content-Type": "application/json",
                  "Authorization": token
                },
              }) 
                .then((res) => res.json())
                .catch((error) => errorConexion())
                .then((response) => {        
                            
                            if (response.message != 'Unauthenticated.'){ 
                                setUser(JSON.parse(localStorage.getItem("user")));  
                                
                                
                            }
                        } );
             
        }
        else{
            let userLocal = {'name':'', 'token':''};
            localStorage.setItem('user', JSON.stringify(userLocal));
            //setUser(JSON.parse(userLocal));
            FormLogin();
            //console.log('NO EXISTE');
        }

        
        
        
      },[]);




      useEffect(() => {

        const intervalo_tickets = setInterval(() => {                            
                                uploadTicket();
                        }, 5000);
        return () => clearInterval(intervalo_tickets); // Limpiar el intervalo cuando el componente se desmonte
      }, []);

      


    const agregarCol = (col)=>{setJugada([col,col+10,col+20,col+30,col+40,col+50,col+60,col+70])}
    const agregarRow = (row)=>{setJugada([row*10+1,row*10+2,row*10+3,row*10+4,row*10+5,row*10+6,row*10+7,row*10+8,row*10+9,row*10+10])}
    const limpiar = ()=>{ setJugada([])}
    const borrarTodo = ()=>{ setJugadas([])}

    const enfocarNum = () => {
        document.querySelector("#opcionindividual").value = '';
        document.querySelector("#opcionindividual").focus();        
    }

    const buscarRepetidos = (arr)=> {
        let repetidos = [];
        let conjunto = new Set();
        for (let i = 0; i < arr.length; i++) {
            if (conjunto.has(arr[i])) {
                repetidos.push(arr[i]);
            } else {
                conjunto.add(arr[i]);
            }
        }
        
        return repetidos.length;
    }
    
    const agregarOpcionIndividual = (tecla, valor) =>{


        if (tecla === 'Enter')
        {     


            if (valor === '.') {
                Procesar();
                enfocarNum();
                return ;
            }


            let arr = valor.split('.');            
            let valores = arr.map(Number);  

            if (buscarRepetidos(arr) > 0)
            {
                swal('Disculpe', 'No pueden haber valore repetidos', 'error');
                return;
            }

            if (arr.length > 10)
            {
                swal('Disculpe', 'Cantidad maxima de valores son de 10', 'error');
                return;
            }


            


            const valores_validos = valores.map(valor => {
                if (typeof valor === 'number') {
                    return valor >= 1 && valor <= 80;
                } else {                                     
                    return false; // O podrías lanzar un error si prefieres                    
                }
            });

            

            if (valores_validos.includes(false))
            {
                swal('Disculpe', 'El valor permito es entre 1 y 80', 'error');
            }
            else
            {
                let new_jugadas = [...jugadas]    
                if (montoApuesta == null || montoApuesta <= 0)   
                {        
                    swal("Disculpe","Monto Invalido!","error");
                    enfocarNum();            
                } 
                else{
                if (valores.length > 0){
                    new_jugadas.push({jugada:valores, monto: montoApuesta })
                    setJugadas(new_jugadas)
                    limpiar();
                    }   
                }
                
            }

   
        }   
        
        
    }


   


    const ProcesarPago = ()=>{

        if (JSON.parse(localStorage.getItem("user"))){
            
            
        
            let userLocal = JSON.parse(localStorage.getItem("user"));
    
            //verificacion de token
            if (userLocal.token.length == 0) return;
            let token = "Bearer " + userLocal.token;      
            let url =  urlApi+'/keno/pagarticket';
            
            fetch(url, {
                method: "POST", // or 'PUT'     
                body: JSON.stringify({'idticket': idticketPagar.idticket, 'serial': serialPago}), // data can be `string` or {object}!       
                headers: {
                "Accept":"application/json",
                "Content-Type": "application/json",
                "Authorization": token
                },
            }) 
                .then((res) => res.json())
                .catch((error) => errorConexion())
                .then((response) => {
                    //console.log(response.message)
                    if (response.message != 'Unauthenticated.') {
                        if (response.success){          
                            $('#PagarTicketModal').modal('hide');
                            //listPagar();
                            
                            uploadTicket();
                            //swal("Exito",response.message, "success")
                        }
                        else {
                            swal("Error",response.message, "error")
                            uploadTicket();
                        }
                    }
                } );
        }
    }

    function fechahoy(idioma) {
        var fecha = new Date(); //Fecha actual
        var mes = fecha.getMonth()+1; //obteniendo mes
        var dia = fecha.getDate(); //obteniendo dia
        var ano = fecha.getFullYear(); //obteniendo año
        if(dia<10)
            dia='0'+dia; //agrega cero si el menor de 10
        if(mes<10)
            mes='0'+mes //agrega cero si el menor de 10
        if (idioma == 'ESP')
            return dia+"/"+mes+"/"+ano;
        else
            return ano+"-"+mes+"-"+dia;
    }

    const cerrarSession = ()=>{ 
        let userLocal = {'name':'', 'token':''};
        localStorage.setItem('user', JSON.stringify(userLocal));
        setUser(userLocal);     
        setUltimasjugadas([]) ;
        SetTicketsUser([]);

        
    }

    const errorConexion = ()=>{  console.log('Error en la conexion');/*cerrarSession(); FormLogin();*/ }
    const FormLogin = ()=>{ $('#modalLogin').modal('show'); }


    useEffect(()=>{
        
        $("#ResumenVentaModal").on("show.bs.modal", () => {
          setRangofecha(null);
          setDesde(fechahoy("ENG"));
          setHasta(fechahoy("ENG"));
          
          
        });

        $("#ResumenVentaModal").on("hide.bs.modal", () => {
          setData([]);
          setRangofecha(null);
          setDesde([]);
          setHasta([]);
          
        });
        
        
        $(function () {
          $('input[name="rangofecha"]').daterangepicker(
            {
              opens: "left",
              ranges: {
                'Hoy': [moment(), moment()],
                'Ayer': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Ultimos 7 dias': [moment().subtract(6, 'days'), moment()],
                'Ultimos 30 dias': [moment().subtract(29, 'days'), moment()],
                'Este Mes': [moment().startOf('month'), moment().endOf('month')],
                'Mes Anterior': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
             }
            },
            function (start, end, label) {
                setLoadingResumenVenta(true);
                setDesde(start.format("YYYY-MM-DD"));
                setHasta(end.format("YYYY-MM-DD"));
            }
          );
        });

    },[])

    
    const resumenVenta = () => {
      $("#ResumenVentaModal").modal("show");
    };


    const MostrarResumenVenta = () =>{
    
        if (JSON.parse(localStorage.getItem("user"))){
            
            let userLocal = JSON.parse(localStorage.getItem("user"));
    
            //verificacion de token
            if (userLocal.token.length == 0) return;
            let token = "Bearer " + userLocal.token;      
            let url =  urlApi+'/keno/resumenventa';
            
            fetch(url, {
                method: "POST", // or 'PUT'     
                body: JSON.stringify({'desde': desde, 'hasta': hasta}), // data can be `string` or {object}!       
                headers: {
                "Accept":"application/json",
                "Content-Type": "application/json",
                "Authorization": token
                },
            }) 
                .then((res) => res.json())
                .catch((error) => errorConexion())
                .then((response) => {
                    //console.log(response.message)
                    if (response.message != 'Unauthenticated.') {
                        if (response.success){
                            
                            if (response.data.length > 0)
                            {
                                setData(response.data); 
                                setLoadingResumenVenta(false);
                            }
                            else 
                            {
                                setData([]);
                            }
                            
                            
                            
                        }
                        else {
                            
                            setData([]);
                            setLoadingResumenVenta(false);
                        }
                    }else 
                    {
                        $("#ResumenVentaModal").modal("hide");
                        FormLogin();
                    }
                    
                } 
                
            );
        }
      }


      useEffect(()=>{                
        MostrarResumenVenta();
        
    },[desde, hasta])


    

    
    const contador = (segundos)=> {
        const worker = new Worker(new URL('./src/timerWorker.js', window.location.href));
        worker.onmessage = (event) => {
                                        if (typeof event.data === "number") {                                    
                                            setSegundosSorteo(event.data);
                                        } else {                                    
                                            //console.log('ejecutando sorteo')
                                            worker.terminate();
                                            setCerrandoApuestas(true);                
                                            setTimeout(() => {
                                                    LoadSorteo()
                                                    setCerrandoApuestas(false);
                                                }, 5000);

                                            setTimeout(() => {
                                                    //uploadTicket()
                                                }, 25000);
                                            
                                        }
                                    };
                            // Inicia el timer con, por ejemplo, 10 segundos
                            worker.postMessage({ seconds: segundos });                            
                            return () => {
                                worker.terminate();
                            };
    }


    const ultimasJugadas = ()=>{

        if (JSON.parse(localStorage.getItem("user"))){
                let userLocal = JSON.parse(localStorage.getItem("user"));
                if (userLocal.token.length == 0) return;
                let token = "Bearer " + userLocal.token;      
                let url =  urlApi+'/keno/ultimostickets';
                
                fetch(url, {
                    method: "GET", // or 'PUT'                     
                    headers: {
                    "Accept":"application/json",
                    "Content-Type": "application/json",
                    "Authorization": token
                    },
                }) 
                    .then((res) => res.json())
                    .catch((error) => errorConexion())
                    .then((response) => {                        
                        if (response.message != 'Unauthenticated.') {                            
                            if (response.success){
                                
                                setUltimasjugadas(response.data)    
                            }
                            else {
    
                            }
                        }
                    } );            
        }else{
            setUltimasjugadas([]) 
        }

    }





    const LoadSorteo = ()=>{
        const urlSorteo = urlApi+'/keno/sorteo';        
        
        fetch(urlSorteo)
            .then(response => response.json())
            .then(
                    function(data){                                                                                        
                        setSegundosSorteo(data.seg_caja);
                        setNumerosorteo(data.idsorteo);                         
                        contador(data.seg_caja);                                
                        ultimasJugadas();


                        //uploadTicket();
                        //setCerrandoApuestas(false); 
                        
                        /*if (data.seg_caja >= 160){ //140

                            setCerrandoApuestas(true); // esta opcion tiene que estan true para que se ejecute como es
                        }
                        else 
                        {
                        
                            setCerrandoApuestas(false);    
                        }*/

                    }
            );
        
    }

   
  
              

  useEffect(() => {

    
    // este codigo se ejecuta solo la primera vez
    if (segundosSorteo === null ) LoadSorteo();

    //if (segundosSorteo > 150 ) setCerrandoApuestas(false);

    

    if (segundosSorteo > 0)
    {
        let cont_new = segundosSorteo ;                        
        var hours = Math.trunc( cont_new / 3600 );  
        var minutes = Math.trunc( (cont_new % 3600) / 60 );
        var seconds = cont_new % 60;                                                           
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        //Anteponiendo un 0 a los segundos si son menos de 10 
        seconds = seconds < 10 ? '0' + seconds : seconds;
        if (cont_new >= 0) setSegundosmostrar(minutes+":"+seconds);   
    }
    else 
    {
        setSegundosmostrar("00:00");
    }


  }, [segundosSorteo]);
  
 
  const pagoInicio = ()=>{
    if(user.name){
        localStorage.setItem("user",JSON.stringify(user));
        //userLocal = JSON.parse(localStorage.getItem("user"));                
        //listPagar();    
        let pagos = user.parametros.pagos.split(',');
        setMontoapuesta(pagos[0]);
    }
  }
  



  useEffect(()=>{
    if(user.name){
        localStorage.setItem("user",JSON.stringify(user));
        //userLocal = JSON.parse(localStorage.getItem("user"));                
        //listPagar();    
        let pagos = user.parametros.pagos.split(',');
        actualizarSaldo();
        ultimasJugadas();
        
        setPagos(user.parametros.pagos.split(','));
        setMontoapuesta(pagos[0]);
        pagoInicio();
        uploadTicket();
        
        const consSaldo = setInterval(() => { actualizarSaldo() }, 10000); 
    }
    else {
        //localStorage.removeItem("user");        
        setTicketsAnular([])     
        setTicketsPagar([])           
        ultimasJugadas();
        
        setPagos([])
    }
             
  },[user])

  // FUNCION QUE ENTREGA LA LISTA DE TICKETS DISPONIBLES PARA SU ANULACION


  const pagarTicket = (idticket)=>{

    if (JSON.parse(localStorage.getItem("user"))){
       
            let userLocal = JSON.parse(localStorage.getItem("user"));
    
            //verificacion de token
            if (userLocal.token.length == 0) return;
            let token = "Bearer " + userLocal.token;      
            let url =  urlApi+'/keno/ticket/'+idticket;
            
            fetch(url, {
                method: "GET", // or 'PUT'                     
                headers: {
                "Accept":"application/json",
                "Content-Type": "application/json",
                "Authorization": token
                },
            }) 
                .then((res) => res.json())
                .catch((error) => errorConexion())
                .then((response) => {
                    
                    if (response.message != 'Unauthenticated.') {
                        
                        if (response.success){     
                            
                            
                            if (response.data.pendiente > 0)
                            {
                                $('#staticPagar').modal('hide');
                                $('#PagarTicketModal').on('show.bs.modal',  ()=>{     
                                                            setSerialpago(response.data.serial);
                                                            setIdticketpagar({ 
                                                                                'idticket': response.data.idticket, 
                                                                                'serial': response.data.serial,
                                                                                'premio': response.data.totalpremio,
                                                                                'jackpot': response.data.premio_jackpot,
                                                                                'pago_pendiente': response.data.pendiente
                                                                                
                                                                            });
                                                            
                                                        })

                                $('#PagarTicketModal').modal('show');
                            }
                            else 
                            {
                                swal("Disculpe","No existe saldo pendiente...", "error")
                            }

                            


                        }
                        else {
                            swal("Error",response.message, "error")
                        }
                    }
                } );
        
    }
    
    
        
  }

  const anularTicket = (id)=>{
    
    swal({
        title: "Seguro desea anular ??",
        text: '', 
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        let userLocal = JSON.parse(localStorage.getItem("user"));
        let token = "Bearer " + userLocal.token;                

        fetch(urlApi+'/keno/ticket/'+id, {
            method: "DELETE", // or 'PUT'            
            headers: {
              "Accept":"application/json",
              "Content-Type": "application/json",
              "Authorization": token
            },
          }) 
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                
                if (response.message == 'Unauthenticated.') 
                {
                    return false;
                }
                else {
                    if (response.success == true){                        
                        //$('#staticAnular').modal('hide');
                        //listAnular();
                        $("#staticAnular").modal('hide');
                        ultimasJugadas();
                        
                        uploadTicket();
                        actualizarSaldo();
                        //listPagar();
                    }
                    else{
                        swal("Error",response.message, "error")
                    }
                        
                }
                    

                

                
            } );


        
        
      } 
    });

  }

  

  const listAnular = () =>{            
        let userLocal = JSON.parse(localStorage.getItem("user"));
        let token = "Bearer " + userLocal.token;                
        fetch(urlApi+'/keno/listaticketanular', {
            method: "GET", // or 'PUT'            
            headers: {
              "Accept":"application/json",
              "Content-Type": "application/json",
              "Authorization": token
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                //setUser({name: response.data.user.name, token: response.data.user.jwt})
                if (response.message == 'Unauthenticated.') {
                    return false;
                }
                else {
                    if (response.success == true) {
                        
                            setTicketsAnular(response.data)
                            $('#staticAnular').modal('show');
                        
                        
                    }
                }
                
                
            } );
    
    
    //$('#staticAnular').modal({ show:true });
    
  }



  const listPagar = () =>{            
    let userLocal = JSON.parse(localStorage.getItem("user"));
    let token = "Bearer " + userLocal.token;
        
    fetch(urlApi+'/keno/listaticketpagar', {
        method: "GET", // or 'PUT'            
        headers: {
          "Accept":"application/json",
          "Content-Type": "application/json",
          "Authorization": token
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
            //setUser({name: response.data.user.name, token: response.data.user.jwt})
            if (response.message == 'Unauthenticated.') {
                return false;
            }
            else {
                if (response.success == true) {
                    //setTicketsPagar(response.data)
                    $('#staticPagar').modal('show');
                }
            }
            
            
        } );
}


    



  
  useEffect(()=>{
    if (ticketPrint.length > 0){ handlePrint(); }
  },[ticketPrint])

 


  
  const a = [1,2,3,4,5,6,7,8,9,10]
  const [jugada, setJugada] = useState([])

  let JugadasInicial = [];
  if (localStorage.getItem("jugadas")) JugadasInicial   = JSON.parse(localStorage.getItem("jugadas"));

  const [jugadas, setJugadas] = useState(JugadasInicial)

  const [montoApuesta, setMontoapuesta] = useState('')


  const quitarJugada = (index)=>{
    let new_jugadas = [...jugadas]                             
    new_jugadas.splice(index, 1)
    setJugadas(new_jugadas)
    limpiar();
  }

  const agregarJugada = ()=>
  {
    let new_jugadas = [...jugadas]    
    if (montoApuesta == null || montoApuesta <= 0)   
    {        
        swal("Disculpe","Monto Invalido!","error");
        enfocarNum();
       
    } 
    else{
     if (jugada.length > 0){
        new_jugadas.push({jugada:jugada, monto: montoApuesta })
        setJugadas(new_jugadas)
        
        limpiar();
        }   
    }
        
    
  }


  function actualizarSaldo()
  {
    let userLocal = JSON.parse(localStorage.getItem("user"));

    if (userLocal.token){
        
        let token = "Bearer " + userLocal.token;
        
        fetch(urlApi+'/saldouser', {
            method: "POST", // or 'PUT'
            body: JSON.stringify(), // data can be `string` or {object}!
            headers: {
              "Accept":"application/json",
              "Content-Type": "application/json",
              "Authorization": token
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                //console.log(response)
                if (response.message == 'Unauthenticated.') {
                    return false;
                }
                else {
                    setUserSaldo({moneda: response.data.idmoneda, monto: response.data.saldo})
                }
                
            } );
      
           
    }
    else{
        setUserSaldo({moneda:'', monto: 0})
    }    
        
  }
  


  


  const agregarOpcion = (num)=>{    

    if (jugada.includes(num)){        
        let new_jugada = [...jugada]
        new_jugada.splice(new_jugada.findIndex((element) => element == num),1)
        setJugada(new_jugada)          
    }
    else{
        let new_jugada = [...jugada]
        if (new_jugada.length < 10){
            new_jugada.push(num)    
            setJugada(new_jugada)            
        }else {
            
            swal("Disculpe","El maximo numero de opciones son 10","error");
        }        
    }
    enfocarNum();

  }

  const shuffle = (arr) =>{
    const length = arr.length  
    for (let i = 0; i < length; i++) {
      const rand_index = Math.floor(Math.random() * length)
      const rand = arr[rand_index]
      arr[rand_index] = arr[i]
      arr[i]          = rand
    }
    return arr;
  }

 

  const azar = (num) =>{
    const opazar = []
    for (var i = 1; i < 81; i++) { opazar.push(i*1); }    
    let new_opazar = shuffle(opazar);      
    setJugada(new_opazar.slice(0,num)) 
  }

  

   

  useEffect(() => {    
    enfocarNum();
  },[jugada, montoApuesta]);



  useEffect(() => {
    localStorage.setItem("jugadas", JSON.stringify(jugadas))
    let total = 0;
    jugadas.map((valor, index)=>{ total += valor.monto*1})
    setTotalJugadas(total);
    
  },[jugadas]);


  

  const RepetirTicket = (id)=>{

        setBtnPrint(false);
        let userLocal = JSON.parse(localStorage.getItem("user"));
        let token = "Bearer " + userLocal.token;
        
        fetch(urlApi+'/keno/repetirTicket/'+id, {
            method: "GET", // or 'PUT'            
            headers: {
              "Accept":"application/json",
              "Content-Type": "application/json",
              "Authorization": token
            },
          })
            .then((res) => res.json())
            .catch((error) => errorConexion())
            .then((response) => {
                
                if (response.message == 'Unauthenticated.') {
                    
                    FormLogin();
                    setBtnPrint(true);
                }
                else {            
                    if (response.status){

                        setBtnPrint(true);         
                        ultimasJugadas();                       
                        
                        SetTicketPrintNew('ticket/'+response.idticket);
                        pagoInicio();
                        uploadTicket();
                    }
                    else {
                        //console.log(response);
                        //FormLogin();
                        swal("Disculpe",response.message, "error");
                        //errorConexion();
                        setBtnPrint(true);
                    }
                }
                        
                //swal("Disculpe","Ticket creado ", "success")
            } );

  }

  


  const Procesar = ()=>{

    if (jugadas.length == 0){
        swal("Disculpe","No hay jugadas para procesar", "error")
        enfocarNum();
    }
    else{

        setBtnPrint(false)
        let userLocal = JSON.parse(localStorage.getItem("user"));
        let token = "Bearer " + userLocal.token;
        
        fetch(urlApi+'/keno/ticket', {
            method: "POST", // or 'PUT'
            body: JSON.stringify(jugadas), // data can be `string` or {object}!
            headers: {
              "Accept":"application/json",
              "Content-Type": "application/json",
              "Authorization": token
            },
          })
            .then((res) => res.json())
            .catch((error) => errorConexion())
            .then((response) => {
                
                if (response.message == 'Unauthenticated.') {
                    
                    FormLogin();
                    setBtnPrint(true);
                    

                }
                else {            
                    if (response.status){
                        
                        //swal("Listo",response.message, "success");
                        borrarTodo();
                        
                        //setTicketPrint(response.ticketPrint)
                        actualizarSaldo();                        
                        setBtnPrint(true);         
                        ultimasJugadas();                       
                        
                        
                        SetTicketPrintNew('ticket/'+response.idticket);
                        uploadTicket();
                        pagoInicio();
                    }
                    else {
                        //console.log(response);
                        //FormLogin();
                        swal("Disculpe",response.message, "error");
                        //errorConexion();
                        setBtnPrint(true);
                    }
                }
                        
                //swal("Disculpe","Ticket creado ", "success")
            } );

    }
  }

  


  const hola = ()=> { 


        document.addEventListener("visibilitychange", function() {
            if (document.visibilityState === 'hidden') {
                //console.log('La pestaña está oculta');
                // Puedes pausar o ajustar tareas aquí
            } else {
                
                //console.log('La pestaña está visible');
                
                //LoadSorteo();
                //location.reload();
                // Reanudar tareas si es necesario
            }
        });


        window.addEventListener("afterprint", (event) => {
            //console.log("After print");
          });


    }
   

   

  


  
  



    
  const columnas = a.map(valor => <button key={'btncol_'+valor} id={'btncol_'+valor} type="button" onClick={()=>agregarCol(valor)}   className="btn col btn-lg btn-primary m-1"><i className="fa-sharp-duotone fa-solid fa-arrow-down"></i></button>);
  const linea1 = a.map(valor => <button key={'btn_'+valor<10?'0'+valor:valor} id={'btn_'+valor<10?'0'+valor:valor} type="button" onClick={()=>agregarOpcion(valor)} className={jugada.includes(parseInt(valor))? "btn col btn-lg btn-success m-1" : "btn col btn-lg btn-default m-1"}> {valor<10?'0'+valor:valor} </button>);
  const linea2 = a.map(valor => <button key={'btn_'+parseInt(10+valor)} id={'btn_'+parseInt(10+valor)} type="button" onClick={()=>agregarOpcion(10+valor)} className={jugada.includes(parseInt(10+valor))? "btn col btn-lg btn-success m-1" : "btn col btn-lg btn-default m-1"}> {10+valor} </button>);
  const linea3 = a.map(valor => <button key={'btn_'+parseInt(20+valor)} id={'btn_'+parseInt(20+valor)} type="button" onClick={()=>agregarOpcion(20+valor)} className={jugada.includes(parseInt(20+valor))? "btn col btn-lg btn-success m-1" : "btn col btn-lg btn-default m-1"}> {20+valor} </button>);
  const linea4 = a.map(valor => <button key={'btn_'+parseInt(30+valor)} id={'btn_'+parseInt(30+valor)} type="button" onClick={()=>agregarOpcion(30+valor)} className={jugada.includes(parseInt(30+valor))? "btn col btn-lg btn-success m-1" : "btn col btn-lg btn-default m-1"}> {30+valor} </button>);
  const linea5 = a.map(valor => <button key={'btn_'+parseInt(40+valor)} id={'btn_'+parseInt(40+valor)} type="button" onClick={()=>agregarOpcion(40+valor)} className={jugada.includes(parseInt(40+valor))? "btn col btn-lg btn-success m-1" : "btn col btn-lg btn-default m-1"}> {40+valor} </button>);
  const linea6 = a.map(valor => <button key={'btn_'+parseInt(50+valor)} id={'btn_'+parseInt(50+valor)} type="button" onClick={()=>agregarOpcion(50+valor)} className={jugada.includes(parseInt(50+valor))? "btn col btn-lg btn-success m-1" : "btn col btn-lg btn-default m-1"}> {50+valor} </button>);
  const linea7 = a.map(valor => <button key={'btn_'+parseInt(60+valor)} id={'btn_'+parseInt(60+valor)} type="button" onClick={()=>agregarOpcion(60+valor)} className={jugada.includes(parseInt(60+valor))? "btn col btn-lg btn-success m-1" : "btn col btn-lg btn-default m-1"}> {60+valor} </button>);
  const linea8 = a.map(valor => <button key={'btn_'+parseInt(70+valor)} id={'btn_'+parseInt(70+valor)} type="button" onClick={()=>agregarOpcion(70+valor)} className={jugada.includes(parseInt(70+valor))? "btn col btn-lg btn-success m-1" : "btn col btn-lg btn-default m-1"}> {70+valor} </button>);

 
  

  return ( 
     
    <>
        <div className={ cerrandoApuestas ? 'cerrando_apuestas': 'visually-hidden' }>
            No mas apuestas...
            
        </div>

       <div ref={ componentRef } className="WMmessage">
            {
                ticketPrint.map((valor, index)=>{
                    return (
                            <p className="lineaticket" key={ index }>{valor.linea}</p>
                    )
                })
            }
       </div>
  
        <Login  setUser={ setUser} urlApi = { urlApi }   />

        <Ticket ticket = { myticket } pagarTicket = { pagarTicket } anularTicket = { anularTicket } jugadas = { jugadas } setJugadas = { setJugadas } Procesar = { Procesar } RepetirTicket = { RepetirTicket } />
        


        <div className="modal fade" id="staticAnular" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticAnularpLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticAnularpLabel">Anular Jugadas</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">                        
                        {
                            ticketsAnular.map((valor, index)=>{
                                return (
                                    <button key={valor.idticket} className="btn bt-sm btn-outline-danger m-1" onClick={ ()=> { $("#staticAnular").modal('hide'); anularTicket(valor.idticket); }}>#{ valor.idticket }</button>
                                )
                            })                            
                        }
                        <div className={ ticketsAnular.length == 0 ? 'alert alert-danger text-center' : 'alert alert-danger text-center visually-hidden'}>No hay tickets disponibles para anular</div>                        
                    </div>
                </div>
            </div>
        </div>



        



        <div className="modal fade" id="ResumenVentaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ResumenVentaModalpLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="ResumenVentaModalpLabel">Resumen de Venta</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body body_info_ticket">                        
                        <form action="" className='form-inline'>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="desde">Periodo { rangofecha } </label>
                                    <input type="text" className="form-control" name="rangofecha" value={ rangofecha }  onChange={ e => setRangofecha(e.target.value) }/>
                                </div>
                                
                            </div>                                        
                        </form>
                        <Resumenventa data = { data } setTicketPrint = { setTicketPrint }  urlApi  = { urlApi } loadingResumenVenta = { loadingResumenVenta }/>
                    </div>
                </div>
            </div>
        </div>




        <div className="modal fade" id="PagarTicketModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="PagarTicketModalpLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="PagarTicketModalpLabel">Pagar Ticket</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="row">
                                <div className="col">
                                
                                    <label>Numero Ticket</label>
                                    <input type="text" className="input form-control" disabled="disabled" value={ idticketPagar.idticket }/>

                                    <div className="row">
                                        <div className="col">
                                            <label>Premio</label>
                                            <input type="text" className="input form-control text-end" disabled="disabled" value={ idticketPagar.premio }/>
                                        </div>
                                        <div className="col">
                                            <label>JackPot</label>
                                            <input type="text" className="input form-control text-end" disabled="disabled" value={ idticketPagar.jackpot }/>
                                        </div>
                                        <div className="col">
                                            <label>Total Pagar</label>
                                            <input type="text" className="input form-control text-end" disabled="disabled" value={ idticketPagar.pago_pendiente }/>
                                        </div>
                                    </div>
                                    


                                    <div className='visually-hidden'>
                                    <label>Serial de Pago</label>
                                    <input type="text" className="input form-control fs-4 text-center" name="serialPago" value= { serialPago } onChange={ e => setSerialpago(e.target.value) } />
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <button type="button" className={idticketPagar.pago_pendiente > 0 ? 'btn btn-success form-control' : 'btn btn-success form-control disabled'} onClick={ () => ProcesarPago() }>Pagar</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>





        
        


        <Menu 
            urlApi = { urlApi } 
            user = { user } 
            usersaldo = { usersaldo } 
            FormLogin = { FormLogin } 
            cerrarSession = { cerrarSession }  
            resumenVenta = { resumenVenta } 
            listAnular = { listAnular } 
            listPagar = { listPagar } 
            ultimasjugadas = { ultimasjugadas } 
            ticketsPagar={ ticketsPagar } 
            pagarTicket = { pagarTicket } 
            jugadas = { jugadas }
            setJugadas = { setJugadas }
            anularTicket = { anularTicket }
            Procesar = { Procesar }            
            myticketConsulta = { myticketConsulta }
            setMyticketConsulta = { setMyticketConsulta }
            ConsultarTicket = { ConsultarTicket }
            SeleccionarTicket = { SeleccionarTicket }
            
        />
        
    
  
    
      


      <div className="body-keno container-fluid">



      

        <div className="row mt-1">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <div className="card">
                <div className="car-body div_marcaje ">
                    <div className="m-3 bg-primary p-0">
                        <div className="linea">{ columnas } <button type="button" className="btn col btn-lg btn-primary m-1 disabled"></button> </div>
                        <div className="linea">{ linea1 } <button type="button" onClick={()=>agregarRow(0)} className="btn col btn-lg btn-primary m-1"><i className="fa-sharp-duotone fa-solid fa-arrow-left"></i></button></div>
                        <div className="linea">{ linea2 } <button type="button" onClick={()=>agregarRow(1)} className="btn col btn-lg btn-primary m-1"><i className="fa-sharp-duotone fa-solid fa-arrow-left"></i></button></div>
                        <div className="linea">{ linea3 } <button type="button" onClick={()=>agregarRow(2)} className="btn col btn-lg btn-primary m-1"><i className="fa-sharp-duotone fa-solid fa-arrow-left"></i></button></div>
                        <div className="linea">{ linea4 } <button type="button" onClick={()=>agregarRow(3)} className="btn col btn-lg btn-primary m-1"><i className="fa-sharp-duotone fa-solid fa-arrow-left"></i></button></div>
                        <div className="linea">{ linea5 } <button type="button" onClick={()=>agregarRow(4)} className="btn col btn-lg btn-primary m-1"><i className="fa-sharp-duotone fa-solid fa-arrow-left"></i></button></div>
                        <div className="linea">{ linea6 } <button type="button" onClick={()=>agregarRow(5)} className="btn col btn-lg btn-primary m-1"><i className="fa-sharp-duotone fa-solid fa-arrow-left"></i></button></div>
                        <div className="linea">{ linea7 } <button type="button" onClick={()=>agregarRow(6)} className="btn col btn-lg btn-primary m-1"><i className="fa-sharp-duotone fa-solid fa-arrow-left"></i></button></div>
                        <div className="linea">{ linea8 } <button type="button" onClick={()=>agregarRow(7)} className="btn col btn-lg btn-primary m-1"><i className="fa-sharp-duotone fa-solid fa-arrow-left"></i></button></div>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="row">
                        <div className="col ">

                            <div className="row">
                                <div className="col d-flex">                                    
                                    <button type="button" onClick={()=>azar(1)}   className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">1</span></button>
                                    <button type="button" onClick={()=>azar(2)}   className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">2</span></button>
                                    <button type="button" onClick={()=>azar(3)}   className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">3</span></button>
                                    <button type="button" onClick={()=>azar(4)}   className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">4</span></button>
                                    <button type="button" onClick={()=>azar(5)}   className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">5</span></button>
                                    <button type="button" onClick={()=>azar(6)}   className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">6</span></button>
                                    <button type="button" onClick={()=>azar(7)}   className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">7</span></button>
                                    <button type="button" onClick={()=>azar(8)}   className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">8</span></button>
                                    <button type="button" onClick={()=>azar(9)}   className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">9</span></button>
                                    <button type="button" onClick={()=>azar(10)}  className="btn col btn  btn-primary m-1"><span className="badge text-bg-light">10</span></button>
                                    <button type="button" onClick={()=>limpiar()} className="btn col btn  btn-danger m-1"><i className="fa-solid fa-xmark"></i></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    
                                    <input type="text" className="visually-hidden"  placeholder="Jugada" value={ jugada }  onChange={e => setJugada(e.target.value)} />

                                    <div className="d-flex justify-content-between mb-1">
                                        <input type="text" id="montoapuesta" name="montoapuesta" className="form-control fs-5  text-center" placeholder="Monto" aria-describedby="button-addon2" value={ montoApuesta } onChange={e => setMontoapuesta(e.target.value)} /> 
                                        
                                    </div>

                                    <div className="d-flex justify-content-between">                                    
                                        
                                        {
                                            pagos.map((valor,index)=>{
                                                return (<button key={ index } type="button" onClick={ () => setMontoapuesta( montoApuesta*1+valor*1 )  } className="btn form-control btn-primary m-0">{ valor }</button>)
                                            })
                                        }

                                        <button  type="button" onClick={ () => setMontoapuesta('')   } className="btn form-control btn-danger m-0"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                    

                                </div>
                                

                                

                                <div className="col d-grid">
                                    

                                    <input type="text" className="form-control text-center mb-1" id="opcionindividual"  placeholder="Opcion" onKeyUp={ e => agregarOpcionIndividual(e.key, e.target.value)}  />                      
                                    <button className="btn btn-success btn-block" type="button" onClick={()=>agregarJugada()}> <i className="fa-solid fa-plus"></i> </button>

                                </div>


                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>


            
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="card mb-1">
                  <div className="card-header text-center">Sorteo #{ numerosorteo } Inicia en</div>
                  <div className="card-body segundos-sorteo p-0 text-center">{ !cerrandoApuestas ? segundosmostrar : '00:00' } </div>
                </div> 

                <div className="card">
                    <div className="card-header text-end fs-4 fw-bold">Total a Pagar:  <FormatNumeric monto = { totalJugadas } moneda =  "COP"  /> {  }</div>
                    <div className="card-body div_jugadas" >      
                        
                        <table className="table">                    
                            <thead>
                            <tr>
                                <th>Jugada</th>
                                <th>Monto</th>
                            </tr>
                            </thead>
                            <tbody>                  
                            { 
                                jugadas.map((valor, index)=>{
                                return (<tr key={ index }>  
                                        <td><button type="button" onClick={()=>quitarJugada(index)} className="btn btn-danger btn-sm"><i className="fa-sharp-duotone fa-solid fa-trash"></i></button> { JSON.stringify(valor.jugada) }</td>
                                        <td><FormatNumeric monto = { valor.monto }/></td>
                                        </tr>)
                                })
                            }
                            </tbody>
                        </table>
                        

                    </div>



                    <div className="card-footer">                                                   
                        <button type="button" onClick={ () => borrarTodo()} className="btn btn-danger col-lg-6"> <i className="fa-solid fa-trash"></i> Todo</button>
                        <button type="button" onClick={ () => Procesar() } className={ btnPrint ? 'btn btn-success col-lg-6' : 'btn  btn-success col-lg-6 disabled' } ><i className="fa-solid fa-print"></i> Imprimir</button>                  
                    </div>
                </div>
            </div>

           
            
        </div>



        <div className="card mt-1">
            <div className="card-header">Tickets</div>
                <div className="coad-body">
                    
                    <table width="100%" className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th className="text-end">Nro</th>
                                <th className="text-end">Partida</th>
                                <th className="text-center">Fecha hora</th>
                                <th className="text-end">Monto Jugada</th>
                                <th className="text-end">Premio</th>
                                <th>Estatus</th>
                                
                                
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                                ticketsUser.map((valor, index)=>{
                                    let segundos_transcurridos = valor.segundos_transcurridos;
                                    let status = 'Jugando'                                
                                    let clase = 'text-start badge text-bg-primary fw-bold';
                                    let jackpot = 0 ;
                                    let tiempo = 25; // segundos que deben pasar despues del cierre para que muestre el premio
                                    let premio_total = 0;
                                    let pendiente = 0;

                                    valor.premio_jackpot == null ? jackpot = 0 : jackpot = valor.premio_jackpot;

                                    premio_total = Number(valor.premio_jackpot) + Number(valor.premio);
                                    pendiente = Number(valor.pendiente);
                                    
                                    if (premio_total > 0 && segundos_transcurridos < tiempo) premio_total = 0;
                                    if (pendiente > 0 && segundos_transcurridos < tiempo) pendiente = 0;
                                    
                                    if (valor.cerrado == 1 && premio_total == 0 && segundos_transcurridos > tiempo) 
                                    {
                                        clase = "text-start badge text-black fw-bold";
                                        status = '';
                                    }
                                    if (valor.pendiente > 0 && segundos_transcurridos > tiempo) 
                                    {
                                        clase = 'text-start badge text-bg-success fw-bold';
                                        status = 'Pendiente de Pago';
                                    }
                                    if (premio_total > 0 && valor.pendiente == 0 && segundos_transcurridos > tiempo) {
                                        clase = 'text-start badge text-bg-success fw-bold';
                                        status = 'Pagado';
                                    }

                                    if (valor.estatus == "ANU") {
                                        clase = 'text-start badge text-bg-danger fw-bold';
                                        status = 'Anulado';
                                    }

                                    
                                    return (     
                                                                        
                                            <tr key={ index }>
                                                <td className="text-end">{valor.idticket}</td>
                                                <td className="text-end">{valor.idsorteo}</td>
                                                <td className="text-center">{valor.fecha_hora_local}</td>
                                                <td className="text-end"><FormatNumeric monto = {valor.monto_jugada}/> </td>
                                                <td className="text-end">
                                                    <span className={ premio_total > 0 ? 'text-end  btn-success' :'invisible'}><FormatNumeric monto = { premio_total }/> </span>                                                    
                                                </td>      
                                                <td > <span className={ clase }>{ status } </span> </td>                                          
                                                <td className="text-start">                                                    
                                                    


                                                    <div className="btn-group btn-group d-flex" role="group" aria-label="Large button group">
                                                        <button type="button" onClick = { () => ConsultarTicket(valor.idticket) } className="btn btn-primary"><i className="fa-solid fa-magnifying-glass"></i></button>
                                                        <button type="button" onClick = { () => anularTicket(valor.idticket) }  className={ status == 'Jugando' ? "btn btn-danger" : "btn btn-default disabled"}><i className="fa-solid fa-trash"></i></button>
                                                        
                                                        <button type="button" onClick = { () => pagarTicket(valor.idticket) }   className={ pendiente > 0 ? "btn btn-success" : "btn btn-default disabled" } ><i className="fa-solid fa-check"></i></button>                                                    
                                                        <button type="button" onClick = { () => RepetirTicket(valor.idticket) } className="btn btn-primary"><i className="fa-solid fa-copy"></i></button>
                                                    
                                                    </div>

                                                </td>
                                                
                                            </tr>
                                    )
                                })
                            }
                           
                        </tbody>
                    </table>
            </div>
        </div>
      </div>

        

      

      <iframe src={ ticketPrintNew } className="ticketPrint"></iframe>

      <Footer zoom = { zoom } setZoom = { setZoom }/>

      
    </>
  )
}




export default caja