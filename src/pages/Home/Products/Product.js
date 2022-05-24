import React, { } from 'react';


const Product = ({ product, setService }) => {


   const { name, picture, minimumQuantity, availableQuantity, description, price } = product

   return (
      <div class="card lg-max-w-lg bg-base-100 shadow-xl">
         <figure class="px-10 pt-10">
            <img src={picture} alt="Shoes" class="rounded-xl" />
         </figure>
         <div class="card-body items-center text-center">
            <h2 class="card-title">Name :{name}</h2>
            <h4>Price :{price}</h4>
            <p>Detail :{description}</p>
            <p>Minimum :{minimumQuantity}</p>
            <p>Available :{availableQuantity}</p>
            <label for="purchase-modal"
               onClick={() => setService(product)}
               class="btn modal-button btn-primary">Button</label>

         </div>
      </div>

   );
};

export default Product;