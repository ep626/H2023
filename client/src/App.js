import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Account from './pages/Account';
import NewAcct from './pages/NewAcct';
import Selections from './pages/Selections';
import ChartSum from './pages/ChartSum';

import{ BrowserRouter as Router, Routes, Route}
from 'react-router-dom'


function App() {
  return (
<Router>
  <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/account' element = {<Account/>}/>
    <Route path = '/NewAcct' element = {<NewAcct/>}/>
    <Route path = '/Selections' element = {<Selections/>}/>
    <Route path = '/ChartSum' element = {<ChartSum/>}/>

  </Routes>
</Router>
  );
}

export default App;
