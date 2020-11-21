import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage';
import InicioPage from './pages/InicioPage';
import FutbolPage from './pages/FutbolPage';
import BaloncestoPage from './pages/BaloncestoPage';
import ElclubPage from './pages/ElclubPage';
import RmtvPage from './pages/RmtvPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path='/RealMadrid' exact component = {LandingPage} />
          <Route path='/RealMadrid/inicio' exact component = {InicioPage} />
          <Route path='/RealMadrid/futbol' exact component = {FutbolPage} />
          <Route path='/RealMadrid/baloncesto' exact component = {BaloncestoPage} />
          <Route path='/RealMadrid/elclub' exact component = {ElclubPage} />
          <Route path='/RealMadrid/rmtv' exact component = {RmtvPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
