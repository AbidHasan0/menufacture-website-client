import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
   const [user] = useAuthState(auth);

   const handleUpdate = event => {
      // event.preventDefault();

   }
   return (
      <div>
         <div>
            <h1>My Profile</h1>
         </div>
         <form className='grid grid-cols gap-3 justify-items-center mt-2'>
            <input type="text" name="name" disabled value={user?.displayName || ""} class="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" disabled value={user?.email || ""} class="input input-bordered w-full max-w-xs" />
            <input type="text" name="linkedin" placeholder="Linkedin Add" class="input input-bordered w-full max-w-xs" required />
            <input type="text" name="phone" placeholder="Your Number" class="input input-bordered w-full max-w-xs" required />
            <input type="text" name="address" placeholder="Your Address" class="input input-bordered w-full max-w-xs " required />

            <button onClick={handleUpdate()} class="btn btn-secondary w-full max-w-xs">Update Profile</button>
         </form>
      </div>
   );
};

export default MyProfile;