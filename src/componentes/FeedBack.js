import React, { useState, useContext } from 'react';
import { AuthContext } from '../componentes/AuthContext';
import BasicRating from './Rating';


function Comentario(props) {
  const { isLogin } = useContext(AuthContext);
  const [mostrarMas, setMostrarMas] = useState(false);
  const [comentarioVisible, setComentarioVisible] = useState(true); 

  const toggleMostrarMas = () => {
    setMostrarMas(!mostrarMas);
  };

  const toggleComentario = () => {
    setComentarioVisible(!comentarioVisible);
  };

  const backgroundColor = comentarioVisible ? 'aliceblue' : 'lightcoral';

  return (
    // Verifica si no estás logueado y el comentario tiene el estado oculto
    !(isLogin === false && comentarioVisible === false) && (
      <div style={{ background: backgroundColor, padding: '20px', width: '80%', margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div style={{ textAlign: 'left' }}>{props.nombreUsuario}</div>
          <div style={{ textAlign: 'right' }}>{props.fecha}</div>
        </div>
        {comentarioVisible && (
          <p>
            {mostrarMas || props.comentario.length <= 100 ? props.comentario : `${props.comentario.slice(0, 100)}...`}
          </p>
        )}
        {props.comentario.length > 100 && (
          <div style={{ textAlign: 'center', bottom: '10px', right: '10px' }}>
            <button onClick={toggleMostrarMas}>
              {mostrarMas ? 'Menos' : 'Más'}
            </button>
          </div>
        )}
        {isLogin && (
          <div style={{ textAlign: 'right'}}>
            <button onClick={toggleComentario}>
              {comentarioVisible ? 'Ocultar Comentario' : 'Mostrar Comentario'}
            </button>
          </div>
        )}
        <div style={{ textAlign: 'right' }}>
          <BasicRating />
        </div>
      </div>
    )
  );
}

export default Comentario;
