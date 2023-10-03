import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Profesores"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Alejandro Suarez
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Materia: Matemáticas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Horario: 18:00 a 22:00 hs
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: $2.000
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dirección: Virtual
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Sing In</Button>
      </CardActions>
    </Card>
    
  );
}