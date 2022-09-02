import { useState, useEffect } from 'react';
import ItemList from '../card/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

      useEffect(() => {
                 fetch('https://fakestoreapi.com/products')
             .then(res=>res.json())
         .then(json=>setProducts(json))
      },
   []
  );
  
  return( 
          <ItemList products={products} />
        )
};

export default ItemListContainer;