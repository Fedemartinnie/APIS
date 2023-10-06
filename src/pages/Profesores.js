import React, { useState, useContext } from 'react';
import { AuthContext } from '../componentes/AuthContext';
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


const defaultTheme = createTheme();

export default function Album() {
  const { isLogin } = useContext(AuthContext);
  const [showMore, setShowMore] = useState(0); // Estado para realizar un seguimiento de cuántas tarjetas adicionales mostrar
  const cardsPerPage = 3; // Número de tarjetas por página

  const [classes, setClasses] = useState([
    {
      className: 'Matematica',
      profesorName: 'Profesor 1',
      tipo: 'grupal',
      frecuencia: 'unica',
      costo: 3500,
      published: false,
    },
    {
      className: 'ingles',
      profesorName: 'Profesor 2',
      tipo: 'individual',
      frecuencia: 'mensual',
      costo: 4000,
      published: true,
    },
    {
      className: 'Musica',
      profesorName: 'Profesor 3',
      tipo: 'individual',
      frecuencia: 'unica',
      costo: 5000,
      published: true,
    },
    {
      className: 'Matematica',
      profesorName: 'Profesor 4',
      tipo: 'grupal',
      frecuencia: 'Semanal',
      costo: 1000,
      published: false,
    },
    {
      className: 'Programacion',
      profesorName: 'Profesor 5',
      tipo: 'individual',
      frecuencia: 'mensual',
      costo: 3500,
      published: true,
    },
    {
      className: 'Programacion',
      profesorName: 'Profesor 4',
      tipo: 'grupal',
      frecuencia: 'mensual',
      costo: 2000,
      published: true,
    },
    {
      className: 'Matematica',
      profesorName: 'Profesor 1',
      tipo: 'grupal',
      frecuencia: 'unica',
      costo: 3500,
      published: false,
    },
    {
      className: 'ingles',
      profesorName: 'Profesor 2',
      tipo: 'individual',
      frecuencia: 'mensual',
      costo: 4000,
      published: true,
    },
    {
      className: 'Musica',
      profesorName: 'Profesor 3',
      tipo: 'individual',
      frecuencia: 'unica',
      costo: 5000,
      published: true,
    },
    {
      className: 'Matematica',
      profesorName: 'Profesor 4',
      tipo: 'grupal',
      frecuencia: 'Semanal',
      costo: 1000,
      published: true,
    },
    {
      className: 'Programacion',
      profesorName: 'Profesor 5',
      tipo: 'individual',
      frecuencia: 'mensual',
      costo: 3500,
      published: true,
    },
    {
      className: 'Programacion',
      profesorName: 'Profesor 4',
      tipo: 'grupal',
      frecuencia: 'mensual',
      costo: 2000,
      published: true,
    },
  ]);

  // Function to add a new class
  const addClass = (newClassData) => {
    setClasses((prevClasses) => [
      ...prevClasses,
      { ...newClassData, published: false }, // inicializar unpublished
    ]);
  };

  // funcion para cambiar el estado de la publicacion (public/unpublished)
  const togglePublicationStatus = (index) => {
    setClasses((prevClasses) => {
      const newClasses = [...prevClasses];
      newClasses[index].published = !newClasses[index].published;
      return newClasses;
    });
  };

  // si no esta loggeado solo muestra las publicadas sino muestra todas
  const filteredClasses = isLogin? 
  classes : classes.filter((cls) => cls.published);

  // Controla si el botón "Mostrar Más" debe mostrarse
  const shouldShowMoreButton = filteredClasses.length > cardsPerPage + showMore;


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            backgroundImage: `url(${imageProfesores})`,
            bgcolor: 'aquamarine',
            pt: 8,
            pb: 6,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',   
          }}
        >
          <div style={{ maxWidth: '80%', margin: '0 auto', textAlign: 'center'}}>
            <FormPropsTextFields 
              onAddClass={addClass}
              isLogin={isLogin}
            />
          </div>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={3}>
            {filteredClasses.slice(0, cardsPerPage + showMore).map((cls, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: cls.published ? 'aquamarine' : 'lightcoral',
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cls.className}
                    </Typography>
                    <Typography>Profesor: {cls.profesorName}</Typography>
                    <Typography>Tipo: {cls.tipo}</Typography>
                    <Typography>Frecuencia: {cls.frecuencia}</Typography>
                    <Typography>Costo: ${cls.costo} </Typography>
                    <CardActions>
                      <Link to="/VistaClase">
                        <Button size="small">View</Button>
                      </Link>
                      {isLogin ? (
                          <Link to="/ListaContratos">
                            <Button size="small">ver alumnos</Button>
                          </Link>
                          ) : (
                          <Link to="/ContratarServicio">
                            <Button size="small">Inscribirse</Button>
                          </Link>
                      )}
                    </CardActions>
                    {isLogin && (
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => togglePublicationStatus(index)}
                        >
                          {cls.published ? 'Despublicar' : 'Publicar'}
                        </Button>
                      </CardActions>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
            </Grid>
            {shouldShowMoreButton && (
            <div> {/* Contenedor para los botones */}
              <Grid
                sx={{ pt: 4 }}
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() => setShowMore((prev) => prev + cardsPerPage)}
                  >
                    Mostrar Más
                  </Button>
                </Grid>
              </Grid>
            </div>
          )}
        </Container>
      </main>
    </ThemeProvider>
  );
}
