import React from 'react';
import { Cabecera } from './componentes/cabecera';
import { Body } from './componentes/body';
import { Pie } from './componentes/pie';
import Login from './componentes/login';
import Registro from './componentes/registro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Monto from './componentes/pagina_monto';
import Visualizar from './componentes/visualizar';
import Listas from './componentes/visualizarlistas';



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
        <Route path='/pagina_monto' element={<Monto/>} />
        <Route path='/visualizar' element={<Visualizar/>}/>
        <Route path='/visualizarlistas' element={<Listas/>}/>

      </Routes>
    </Router>

    </>
  );
}

export default App;
