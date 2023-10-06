import React, { useState, useContext } from 'react';
import { AuthContext } from '../componentes/AuthContext';
import VideoComponent from '../componentes/Video';
import Button from '@mui/material/Button';
import Comentario from '../componentes/FeedBack';
import { Link } from '@mui/material';

export default function VistaClase() {
  const { isLogin } = useContext(AuthContext);

  const comentarios = [
    { nombreUsuario: 'Fede Nie', fecha: '2023-09-30', comentario: 'Lorem ipsum 1kajsndfkj lkasdlk flaksdl fkl alskdf laksmdfl asdlkf skldf kls dlk lkjaslkdfj alkipsum 1kajsndfkj lkasdlk flaksdl fkl alskdf laksmdfl asdlkf skldf kls dlk lkjaslkdfj alk' },
    { nombreUsuario: 'Usuario2', fecha: '2023-09-29', comentario: 'Lorem ipsum 2' },
  ];

  return (
    <div>
      <div style={{ backgroundColor: 'lightblue' }}>
        <VideoComponent />
      </div>
      <div>
        <p>Cantidad de Comentarios: {comentarios.length}</p>
      </div>
      {comentarios.map((comentario, index) => (
        <div key={index} style={{ marginBottom: '20px' }}> {/* Añade margen inferior entre cada comentario */}
          <Comentario
            nombreUsuario={comentario.nombreUsuario}
            fecha={comentario.fecha}
            comentario={comentario.comentario}
            isLogin={isLogin} // Pasa la variable isLogin como prop
          />
        </div>
      ))}
      {!isLogin && (//si no esta loggeado podra agregar comentarios
        <div>
          <Link to='/Profesores'>
            <Button variant="contained">Agregar Comentario</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
