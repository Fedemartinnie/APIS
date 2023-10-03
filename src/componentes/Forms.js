import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function FormPropsTextFields({ isProfesoresPage }) {
  const [materia, setMateria] = useState('');
  const [profesor, setProfesor] = useState('');
  const [Tipo, setTipo] = useState('');
  const [frecuencia, setfrecuencia] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Supongamos que aquí tienes el estado de autenticación

  const handleBuscarClick = () => {
    // Aquí puedes realizar la búsqueda con los valores de los campos
    console.log('Materia:', materia);
    console.log('Profesor:', profesor);
    console.log('Tipo:', Tipo);
    console.log('frecuencia:', frecuencia);
  };

  const textFieldStyle = {
    background: 'white', // Establece el fondo del TextField en blanco
  };

  return (
    <div>
      <h2 style={{color:'royalblue'}}>Busca Tu Clase!</h2>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <TextField
            label="Materia"
            variant="outlined"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            fullWidth
            style={textFieldStyle} // Aplica el estilo al TextField
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Profesor"
            variant="outlined"
            value={profesor}
            onChange={(e) => setProfesor(e.target.value)}
            fullWidth
            style={textFieldStyle} // Aplica el estilo al TextField
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Tipo"
            variant="outlined"
            value={Tipo}
            onChange={(e) => setTipo(e.target.value)}
            fullWidth
            style={textFieldStyle} // Aplica el estilo al TextField
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="frecuencia"
            variant="outlined"
            value={frecuencia}
            onChange={(e) => setfrecuencia(e.target.value)}
            fullWidth
            style={textFieldStyle} // Aplica el estilo al TextField
          />
        </Grid>
        
        <Grid item xs={isProfesoresPage && isLoggedIn ? 6 : 12}>
          <Button variant="contained" color="primary" onClick={handleBuscarClick} fullWidth>
            Buscar
          </Button>
        </Grid>
        {isProfesoresPage && isLoggedIn ? (
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth>
              Agregar Clase
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default FormPropsTextFields;
