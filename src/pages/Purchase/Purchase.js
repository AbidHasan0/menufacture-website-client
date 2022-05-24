import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = ({ service, setService }) => {
   const { _id, name, price } = service;
   const [user, loading, error] = useAuthState(auth);

   const handleBooking = event => {
      event.preventDefault();

      const booking = {
         serviceId: _id,
         service: name,
         buyer: user.email,
         buyerName: user.displayName,
         phone: event.target.phone.value,
         address: event.target.address.value
      }




      setService(null);
   }


   return (
      <div>
         <input type="checkbox" id="purchase-modal" class="modal-toggle" />
         <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
               <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 class="font-bold text-lg text-secondary">Booking for : {name}</h3>
               <form onSubmit={handleBooking} className='grid grid-cols gap-3 justify-items-center mt-2'>
                  <input type="text" name="name" disabled value={user?.displayName || ""} class="input input-bordered w-full max-w-xs" />
                  <input type="email" name="email" disabled value={user?.email || ""} class="input input-bordered w-full max-w-xs" />
                  <input type="text" name="phone" placeholder="Your Number" class="input input-bordered w-full max-w-xs" />
                  <input type="text" placeholder="Your Address" class="input input-bordered w-full max-w-xs" />
                  <input type="submit" vlaue="Submit" class="btn btn-secondary w-full max-w-xs" />
               </form>

            </div>
         </div>
      </div>
   );
};

export default Purchase;