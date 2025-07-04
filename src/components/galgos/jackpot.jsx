import { useEffect, useRef } from "react";

function Jackpot(){

    const[mini, setMini] = useState(0);
    const[supe, setSupe] = useState(0);
    const[mega, setMega] = useState(0);

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card ">
                        <div className="card-header bg-dark">
                            Mini Jackpot
                        </div>
                        <div className="card-body">
                            { mini }
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Super Jackpot
                        </div>
                        <div className="card-body">
        
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Mega Jackpot
                        </div>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Jackpot;