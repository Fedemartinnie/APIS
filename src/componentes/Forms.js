import React, { useState, useContext } from 'react';
import { AuthContext } from '../componentes/AuthContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function FormPropsTextFields({ onAddClass }) {
  const { isLogin } = useContext(AuthContext);
  const [materia, setMateria] = useState('');
  const [profesor, setProfesor] = useState('');
  const [Tipo, setTipo] = useState('');
  const [frecuencia, setFrecuencia] = useState('');
  const [costo, setCosto] = useState('');

  const handleBuscarClick = () => {
    // Realiza la búsqueda con los valores de los campos
    console.log('Materia:', materia);
    console.log('Profesor:', profesor);
    console.log('Tipo:', Tipo);
    console.log('Frecuencia:', frecuencia);
    console.log('Costo:', costo);
  };

  const handleAgregarClaseClick = () => {
    // Agrega la nueva clase utilizando la función proporcionada por el prop
    const newClassData = {
      className: materia,
      profesorName: profesor,
      tipo: Tipo,
      frecuencia: frecuencia,
      costo: costo, // Agrega el costo
    };
    onAddClass(newClassData);
    // Limpia los campos de entrada después de agregar la clase
    setMateria('');
    setProfesor('');
    setTipo('');
    setFrecuencia('');
    setCosto('');
  };

  const textFieldStyle = {
    background: 'white',
  };

  return (
    <div>
      <h2 style={{fontSize:'50px', color: 'royalblue' }}>Busca Tu Clase!</h2>
      <Grid container spacing={2}>
        {/* TextFields */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Materia"
            variant="outlined"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            fullWidth
            style={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Profesor"
            variant="outlined"
            value={profesor}
            onChange={(e) => setProfesor(e.target.value)}
            fullWidth
            style={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Tipo"
            variant="outlined"
            value={Tipo}
            onChange={(e) => setTipo(e.target.value)}
            fullWidth
            style={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Frecuencia"
            variant="outlined"
            value={frecuencia}
            onChange={(e) => setFrecuencia(e.target.value)}
            fullWidth
            style={textFieldStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Costo"
            variant="outlined"
            value={costo}
            onChange={(e) => setCosto(e.target.value)}
            fullWidth
            style={textFieldStyle}
          />
        </Grid>
        
        {/* Buttons */}
        <Grid item xs={isLogin ? 5:10}>
          <Button variant="contained" color="primary" onClick={handleBuscarClick} fullWidth>
            Buscar
          </Button>
        </Grid>
        {isLogin ? (
          <Grid item xs={5}>
            <Button variant="contained" color="primary" onClick={handleAgregarClaseClick} fullWidth>
              Agregar Clase
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default FormPropsTextFields;
