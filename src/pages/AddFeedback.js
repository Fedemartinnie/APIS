import React, { useState, useNavigate, useContext } from 'react';
import { AuthContext } from '../componentes/AuthContext';
import BasicRating from '../componentes/Rating';
import { Link } from '@mui/material';

function AddFeedback() {
    const [state, setState] = useState({
      nombreUsuario: '',
      fecha: '',
      comentario: '',
      BasicRating,
    });
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      /*if (name === 'telefono' && !/^\d*$/.test(value)) {
        return;
      }*/
      setState({ ...state, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const contrato = { ...state };
  
      // Recupera la lista actual de contratos del localStorage
      const storedData = localStorage.getItem('contratos');
      let contratos = [];
  
      if (storedData) {
        contratos = JSON.parse(storedData);
      }
  
      // Agrega el nuevo contrato a la lista
      contratos.push(contrato);
  
      // Almacena la lista actualizada en localStorage
      localStorage.setItem('contratos', JSON.stringify(contratos));
  
      // Redirige a la página de profesores
      navigate('/profesores');
    }
  
    const formContainerStyle = {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f8f8f8',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    };
  
    const inputStyle = {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px',
    };
  
    const buttonStyle = {
      display: 'block',
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    };
  
    return (
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: 'center' }}>Contratar Servicio</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre Usuario:</label>
            <input
              type="text"
              name="nombreUsuario"
              value={state.telefono}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label>Fecha:</label>
            <input
              type="text"
              name="Fecha"
              value={state.fecha}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label>Mensaje al proveedor:</label>
            <textarea
              name="comentario"
              value={state.comentario}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label>Rating:</label>
            <input
              type="BasicRating"
              name="BasicRating"
              value={state.BasicRating}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>Enviar Comentario</button>
        </form>
      </div>
    );
  }
  
  export default AddFeedback;