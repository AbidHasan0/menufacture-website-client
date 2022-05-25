import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const ProductDetails = () => {
   const { id } = useParams();
   const [product, setProduct] = useState({});
   useEffect(() => {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setProduct(data)
         })
   }, [id]);

   const { picture, name, price, minimumQuantity, availableQuantity, description, _id } = product;
   const [user] = useAuthState(auth);

   const handleOrder = event => {
      event.preventDefault();

      const order = {
         serviceId: _id,
         service: name,
         buyer: user.email,
         quantity: event.target.quantity.value,
         buyerName: user.displayName,
         phone: event.target.phone.value,
         address: event.target.address.value,


      };

      fetch('http://localhost:5000/order', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(order)

      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            // setService(null);

            toast('success to your booking')

         })

   };

   return (
      <div>
         <div className='flex justify-center items-center my-5'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
               <figure><img src={picture} alt="Shoes" /></figure>
               <div class="card-body">
                  <h2 class="card-title">{name}</h2>
                  <h1 className='text-xl'>Price : {price}</h1>
                  <h2>Minimum Quantity : {minimumQuantity}</h2>
                  <h2>Available Quantity : {availableQuantity}</h2>
                  <p>{description}</p>
                  <div class="card-actions justify-end">
                     {/* <button class="btn btn-primary">Buy Now</button> */}
                     <label for="purchase-modal" class="btn modal-button btn-primary">Buy Now</label>

                  </div>
               </div>
            </div>
         </div>

         <input type="checkbox" id="purchase-modal" class="modal-toggle" />
         <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
               <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 class="font-bold text-lg text-secondary">Order for : {name}</h3>
               <form onSubmit={handleOrder} className='grid grid-cols gap-3 justify-items-center mt-2'>
                  <input type="text" name="name" disabled value={user?.displayName || ""} class="input input-bordered w-full max-w-xs" />
                  <input type="email" name="email" disabled value={user?.email || ""} class="input input-bordered w-full max-w-xs" />
                  <input type="text" name="quantity" placeholder="Product Quantity" class="input input-bordered w-full max-w-xs" required />
                  <input type="text" name="phone" placeholder="Your Number" class="input input-bordered w-full max-w-xs" required />
                  <input type="text" name="address" placeholder="Your Address" class="input input-bordered w-full max-w-xs " required />

                  <input type="submit" vlaue="Submit" class="btn btn-secondary w-full max-w-xs" />
               </form>

            </div>
         </div>

      </div>
   );
};

export default ProductDetails;