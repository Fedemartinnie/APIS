import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import Profesores from './pages/Profesores';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Clases from './pages/Clases';
import VistaClase from './pages/VistaClase';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />}/>
          <Route path="Clases" element={<Clases />}/>
          <Route path="VistaClase" element={<VistaClase />}/>
          <Route path="Profesores" element={<Profesores />} />
          <Route path="SignIn" element={<SignIn />}/> 
          <Route path="SignUp" element={<SignUp />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
