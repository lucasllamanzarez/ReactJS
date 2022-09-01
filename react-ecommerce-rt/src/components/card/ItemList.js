import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Itemcount from './Itemcount';


const ItemList = (data) => {

  return (
    <Card sx={{ maxWidth: 345, margin: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= {data.image}
          alt="Productos RiseTech"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Itemcount />
        <Button size="small" color="primary">
          Agregar Producto
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemList ;