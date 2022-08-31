import React, { useState, useEffect } from 'react';
import ItemListContainer from '../card/ItemListContainer';

        
const ItemList = () => {
         const [products, setProducts] = useState([]);

             useEffect(() => {
                        fetch('https://fakestoreapi.com/products')
                    .then(res=>res.json())
                .then(json=>setProducts(json))
             },
          []
         );


    return (
            <div>
                {products.map((product) => {
                        return   <ItemListContainer key = {product.id} data={product} />    

                })}  
            </div>
            
    );
};

export default ItemList;