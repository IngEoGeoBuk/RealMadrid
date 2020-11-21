import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ElclubPage from '../../pages/ElclubPage';
import FutbolPage from '../../pages/FutbolPage';
import InicioPage from '../../pages/InicioPage';
import BaloncestoPage from '../../pages/BaloncestoPage';
import RmtvPage from '../../pages/RmtvPage';

function SideBarMenu() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path ='/RealMadrid/inicio' exact component={InicioPage} />
                    <Route path ='/RealMadrid/futbol' exact component={FutbolPage}/>
                    <Route path ='/RealMadrid/baloncesto' exact component={BaloncestoPage} />
                    <Route path ='/RealMadrid/elclub' exact component={ElclubPage} />
                    <Route path ='/RealMadrid/socios'/>
                    <Route path ='/RealMadrid/fans'/>
                    <Route path ='/RealMadrid/estadio'/>
                    <Route path ='/RealMadrid/rmtv' exact component={RmtvPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default SideBarMenu
