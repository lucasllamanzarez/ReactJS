import { useState, useEffect } from 'react';
import Itemdetail from '../card/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

      useEffect(() => {
                 fetch('https://fakestoreapi.com/products')
             .then(res=>res.json())
         .then(json=>setProduct(json))
      },
   []
  );
  
  return( 
    <div>
        <Itemdetail product={product} /> 
                </div>
        )
};

export default ItemDetailContainer;