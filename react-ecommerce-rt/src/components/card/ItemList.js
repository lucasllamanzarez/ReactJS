import React from 'react';
import Item from '../card/Item';

        
const ItemList = ({products}) => {

    return (
            <div>
                {products.map((product) => {
                    return   <Item key = {product.id} title={product.title} description={product.description} image={product.image} />    

                })}  
            </div>
            
    );
};

export default ItemList;