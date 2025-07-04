import { BrowserRouter as Browser, Routes, Route  } from "react-router-dom";
import Notfound from './notfound'
import Caja from './caja'

import Monitor from './components/monitor/monitor.jsx'
import Galgos from './components/galgos/monitorgalgos.jsx'
import Keno from './components/keno/monitor.jsx'
import Ruleta from './components/ruleta/ruleta.jsx'
//import Login from './components/login.jsx'
import Login from './login.jsx'
import { userSignal, tokenSignal } from './shared/userSignal.jsx';
import { urlApiSignal } from "./shared/urlApiSignal.jsx"



function App() {
    const urlApi = 'https://api.keskplay.com/api';
    //const urlApi = '//127.0.0.1:8000/api';
    return ( 

        <Browser>
            <Routes>
                <Route path="/login" element={ < Login urlApi={ urlApi }/> } />
                <Route path="/" element={ < Monitor urlApi={ urlApi }/> } />
                <Route path="/galgos" element={ < Galgos urlApi={ urlApi }/> } />
                <Route path="/keno" element={ < Keno urlApi={ urlApi }/> } />
                <Route path="/ruleta" element={ < Ruleta urlApi={ urlApi }/> } />
                
                <Route exact path="/" element={ < Caja urlApi={ urlApi }/> } />                
                <Route path="*" element={ < Monitor urlApi={ urlApi }/> } />
            </Routes>
        </Browser>
    );
}






export default App


