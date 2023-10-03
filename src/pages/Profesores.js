import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormPropsTextFields from '../componentes/Forms';
import imageProfesores from '../img/Profesores-header.jpeg';
import VistaClase from './VistaClase';
import AuthProvider from '../componentes/AuthContext';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  // Un estado para mantener el estado de publicación de cada clase
  const [classPublicationStatus, setClassPublicationStatus] = useState(
    new Array(cards.length).fill(false) // Inicialmente todas las clases están despublicadas
  );

  // Función para alternar el estado de publicación de una clase
  const togglePublicationStatus = (index) => {
    const newStatus = [...classPublicationStatus];
    newStatus[index] = !newStatus[index];
    setClassPublicationStatus(newStatus);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage: `url(${imageProfesores})`,
            bgcolor: 'aquamarine',
            pt: 8,
            pb: 6,
            backgroundSize: 'cover', // Ajusta la imagen al tamaño del contenedor
            backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <FormPropsTextFields isProfesoresPage={true} />
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', 
                  flexDirection: 'column' ,backgroundColor: classPublicationStatus[index] ? 'aquamarine' : 'lightcoral'}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      ClassName
                    </Typography>
                    <Typography>
                     Aqui van los datos principales de la materia
                    </Typography>
                    <CardActions>
                      <Link to='/VistaClase'>
                        <Button size="small">View</Button>
                      </Link>
                      <Button size="small">Edit</Button>
                    </CardActions>
                    <CardActions>
                      <Button size="small" onClick={() => togglePublicationStatus(index)}>
                        {classPublicationStatus[index] ? 'Despublicar' : 'Publicar'}
                      </Button>
                    </CardActions>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
            <Grid
              sx={{ pt: 4 }}
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Button variant="contained">Mostrar Más</Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
