import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";

function Altabaja( {carrera}) 
{

    return (<>

    <div className="card">
        <div className="card-header fs-4 p-1 bg-warning bg-gradient text-dark fw-bold">BAJA | ALTA</div>
        <div className="card-body m-0 p-0 fs-3">
            <table className="table table-dark table-sm table-striped m-0 fs-3" width="100%">
            <tbody>
                <tr>
                    <th> <img src={ btn_1} className="btn_exactas"/> <img src={ btn_2} className="btn_exactas"/> <img src={ btn_3} className="btn_exactas"/></th>
                    <td>{Number(carrera.baja).toFixed(2) }</td>
                </tr>
                <tr>
                    <th><img src={ btn_4} className="btn_exactas"/> <img src={ btn_5} className="btn_exactas"/> <img src={ btn_6} className="btn_exactas"/></th>
                    <td>
                        {Number(carrera.alta).toFixed(2)}
                    </td>
                </tr>
                
            </tbody>
        </table>

        </div>
        

    </div>
    </>)

} 

export default Altabaja;