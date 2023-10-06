import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormPropsTextFields from '../componentes/Forms';
import VistaClase from './VistaClase';
import Comentario from '../componentes/FeedBack';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const initialShowCount = 6;
const itemsPerPage = 6;

export default function Album() {
  const [showCount, setShowCount] = useState(initialShowCount); // Inicialmente, muestra 6 elementos
  //const itemsPerPage = 6; // Cantidad de elementos a mostrar por página
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor:'aliceblue',
            pt: 2,
            pb: 2,
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
            <FormPropsTextFields/>
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
                    ProfesorName
                    </Typography>
                    <Typography>
                    ClassName: 
                    </Typography>
                    <Typography>
                    Horario: 
                    </Typography>
                    <Typography>
                    Costo: 
                    </Typography>
                  </CardContent>
                 
                  <CardActions>
                    
                    <Link to='/VistaClase' style={{ textDecoration: 'none' }}> 
                        <Button size="small" >View Class</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <Grid
              sx ={{pt: 4}}
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Button variant="contained" onClick={() => setShowCount(showCount + itemsPerPage)} >Mostrar Más</Button>
              </Grid>
              <Grid item>
                    <Comentario
                    nombreUsuario="Nombre Usuario"
                    fecha="2023-09-27"
                    comentario="Este es un comentario de ejemplo 
                    que puede ser largo y necesitar un botón de 'más' 
                    para expandirse.lkajsdnfkjansdfknskfjkdsnfasndfkjsdfk
                    aksdnfkansdfklasnkfjlasndkjnklasdfnkjasnfks
                    aksdjfnkasndflkasnflknsklfnkjdsfnkljasnfkjdn"
                  />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}