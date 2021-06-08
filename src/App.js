import Navbar from './components/Navbar';
import Home from './components/Home';
import InputTujuan from './components/InputTujuan';
import CariJalur from './components/CariJalur';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/input" component={InputTujuan}/>
          <Route path="/cari" component={CariJalur}/>
        </Switch>
       
      </div>
    </div>
    
  );
}

export default App;
