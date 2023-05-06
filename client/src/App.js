import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Account from './pages/Account';

import{ BrowserRouter as Router, Routes, Route}
from 'react-router-dom'


function App() {
  return (
<Router>
  <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/account' element = {<Account/>}/>
  </Routes>
</Router>
  );
}

export default App;
