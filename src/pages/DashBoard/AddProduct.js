import React from 'react';

const AddProduct = () => {


   const handleAdd = event => {
      event.preventDefault();


   };
   return (
      <div>
         <h2 className='text-3xl'>Add New Product</h2>
         <div className='flex justify-center items-center mb-4'>
            <form onSubmit={handleAdd} className='grid grid-cols gap-3 justify-items-center mt-2'>
               <input type="text" name="name" placeholder='Name' class="input input-bordered w-full max-w-xs" />
               <input type="text" name="quantity" placeholder='Quantity' class="input input-bordered w-full max-w-xs" />
               <input type="text" name="price" placeholder="Price" class="input input-bordered w-full max-w-xs" required />
               <input type="text" name="detail" placeholder="Detail" class="input input-bordered w-full max-w-xs" required />

               <input type="submit" vlaue="Submit" class="btn btn-secondary w-full max-w-xs" />
            </form>
         </div>
      </div>
   );
};


export default AddProduct;