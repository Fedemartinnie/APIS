import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoComponent from '../componentes/Video';
import BasicRating from '../componentes/Rating';
import Comentario from '../componentes/FeedBack';
import { Padding } from '@mui/icons-material';

export default function VistaClase() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const comentarios = [
    { nombreUsuario: 'Fede Nie', fecha: '2023-09-30', comentario: 'Lorem ipsum 1kajsndfkj lkasdlk flaksdl fkl alskdf laksmdfl asdlkf skldf kls dlk lkjaslkdfj alkipsum 1kajsndfkj lkasdlk flaksdl fkl alskdf laksmdfl asdlkf skldf kls dlk lkjaslkdfj alk' },
    { nombreUsuario: 'Usuario2', fecha: '2023-09-29', comentario: 'Lorem ipsum 2' },
    // Agrega más comentarios aquí según sea necesario
  ];

  const toggleComentarios = () => {
    // Lógica para mostrar u ocultar los comentarios
  };

  return (
    <div>
      <div>
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
            isLoggedIn={isLoggedIn} // Pasa la variable isLoggedIn como prop
          />
        </div>
      ))}
    </div>
  );
}
