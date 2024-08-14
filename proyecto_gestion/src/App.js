import React from 'react';
import { Cabecera } from './componentes/cabecera';
import { Body } from './componentes/body';
import { Pie } from './componentes/pie';
import Login from './componentes/login';
import Registro from './componentes/registro';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return(
  <>
    <Cabecera />
    <Body/>
    <Pie/>
    </>
  )

}
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />}  />
        <Route path='/registro' element={<Registro/>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
