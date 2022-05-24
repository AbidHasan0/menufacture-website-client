import React, { useEffect, useState } from 'react';
import Purchase from '../../Purchase/Purchase';
import Product from './Product';

const Products = () => {
   const [products, setProducts] = useState([]);
   const [service, setService] = useState(null);
   useEffect(() => {

      fetch('http://localhost:5000/product')
         .then(res => res.json())
         .then(data => setProducts(data));

   }, [])

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
                  setService={setService}

               >
               </Product>)
            }

         </div>

         {service && <Purchase service={service} setService={setService}></Purchase>}


      </div>

   );
};

export default Products;