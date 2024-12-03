import { BrowserRouter as Browser, Routes, Route  } from "react-router-dom";
import Notfound from './notfound'
import Caja from './caja'
import Monitor from './components/keno/monitor.jsx'
import Rpt_ticket_keno from './components/keno/rpt_ticket.jsx'

function App() {

    const urlApi = 'https://api.keskplay.com/api';

    return ( 

        <Browser>
            <Routes>
                <Route exact path="/" element={ < Caja urlApi={ urlApi }/> } />
                <Route path="/monitor" element={ < Monitor urlApi={ urlApi }/> } />
                <Route path="/ticket/:id" element={ < Rpt_ticket_keno urlApi = { urlApi }/> } />
                <Route path="*" element={ <Notfound/> } /> 
            </Routes>
        </Browser>
    );
}






export default App


