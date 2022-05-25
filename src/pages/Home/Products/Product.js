import React, { } from 'react';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
   const navigate = useNavigate()
   const handlePurchase = (id) => {
      navigate(`/productDetails/${id}`)
   }


   const { _id, name, picture, minimumQuantity, availableQuantity, description, price } = product

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
            <button onClick={() => handlePurchase(_id)} className='btn btn-outline'>Purchase</button>

         </div>
      </div>

   );
};

export default Product;