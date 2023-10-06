import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import Profesores from './pages/Profesores';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Blog from './pages/Home';
import Clases from './pages/Clases';
import VistaClase from './pages/VistaClase';
import ContratarServicio from './pages/ContratarServicio';
import { AuthProvider } from './componentes/AuthContext';
import ListaContratos from './pages/ListaContratos';
import DatosProfesor from './pages/DatosProfesor';
import AddFeedback from './pages/AddFeedback';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Blog />}/>
            <Route path="Clases" element={<Clases />}/>
            <Route path="VistaClase" element={<VistaClase />}/>
            <Route path="Profesores" element={<Profesores />} />
            <Route path="SignIn" element={<SignIn />}/> 
            <Route path="SignUp" element={<SignUp />}/>
            <Route path="ContratarServicio" element={<ContratarServicio />}/>
            <Route path='ListaContratos' element={<ListaContratos />}/>
            <Route path='DatosProfesor' element={<DatosProfesor />}/>
            <Route path='AddFeedback' element={<AddFeedback />}/>
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
