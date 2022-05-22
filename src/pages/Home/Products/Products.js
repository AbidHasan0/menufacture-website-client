import React from 'react';
import Tyre from '../../../Asserts/image/products1.jpg'
import Motor from '../../../Asserts/image/products2.jpg'
import Door from '../../../Asserts/image/products3.jpg'
import Piston from '../../../Asserts/image/products4.jpg'
import Handle from '../../../Asserts/image/products5.jpg'
import Pedal from '../../../Asserts/image/products6.jpg'
import Product from './Product';

const Products = () => {
   const products = [
      {
         _id: 1,
         name: "Tyre",
         description: "lorem dhdsfdnvdszvsdzfdfsdfvhnvn",
         img: Tyre,
         minimumQuantity: 200,
         availableQuantity: 5000,
         Price: 30

      },
      {
         _id: 2,
         name: "Motor",
         description: "lorem dhdsfdnvdszvsdzfdfsdfvhnvn",
         img: Motor,
         minimumQuantity: 100,
         availableQuantity: 3000,
         Price: 200

      },
      {
         _id: 3,
         name: "Door",
         description: "lorem dhdsfdnvdszvsdzfdfsdfvhnvn",
         img: Door,
         minimumQuantity: 100,
         availableQuantity: 5000,
         Price: 30

      },
      {
         _id: 4,
         name: "Piston",
         description: "lorem dhdsfdnvdszvsdzfdfsdfvhnvn",
         img: Piston,
         minimumQuantity: 50,
         availableQuantity: 4000,
         Price: 70

      },
      {
         _id: 5,
         name: "Handle",
         description: "lorem dhdsfdnvdszvsdzfdfsdfvhnvn",
         img: Handle,
         minimumQuantity: 500,
         availableQuantity: 5000,
         Price: 45

      },
      {
         _id: 6,
         name: "Pedal",
         description: "lorem dhdsfdnvdszvsdzfdfsdfvhnvn",
         img: Pedal,
         minimumQuantity: 150,
         availableQuantity: 2500,
         Price: 18

      },
   ];
   return (
      <div>
         <div className='my-20'>
            <h1 className='text-primary text-center text-4xl uppercase font-bold'>Our Products</h1>
         </div>
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
               products.map(product => <Product
                  key={product._id}
                  product={product}
               >
               </Product>)
            }
         </div>
      </div>

   );
};

export default Products;