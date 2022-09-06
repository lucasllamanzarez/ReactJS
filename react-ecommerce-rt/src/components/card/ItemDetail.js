import * as React from 'react';
import Itemcount from './Itemcount';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


const Itemdetail = ({product}) => {

    return (
      <Card sx={{ maxWidth: 345, margin: 5}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height='200'
            image= {product.image}
            alt="Productos RiseTech"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             $ {product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
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

  export default Itemdetail;