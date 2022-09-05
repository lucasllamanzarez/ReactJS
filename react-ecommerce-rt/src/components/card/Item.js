import * as React from 'react';
import Itemcount from './Itemcount';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


const Item = ({title, price, image}) => {

    return (
      <Card sx={{ maxWidth: 345, margin: 5}}>
        <CardActionArea>
          <CardMedia
            component="img"
            image= {image}
            alt="Productos RiseTech"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             $ {price}
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

  export default Item;