import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navber = () => {
   const [user, loading, error] = useAuthState(auth);

   const logout = () => {
      signOut(auth)
      localStorage.removeItem('accessToken');
   };


   const menuItem = <>
      <li><Link to="/home">Home</Link></li>
      {/* <li><Link to="/purchase">Purchase</Link></li> */}
      <li><Link to="/reviews">Reviews</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      {
         user && <li><Link to="/dashboard">DashBoard</Link></li>
      }
      <li>{user ? <button class="btn btn-active btn-ghost" onClick={logout}>Signout</button> : <Link to="/login">Login</Link>}</li>
   </>
   return (
      <div class="navbar bg-primary">
         <div class="navbar-start">
            <div class="dropdown">
               <label tabindex="0" class="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menuItem}
               </ul>
            </div>
            <Link to="/home" className="btn normal-case text-primary font-serif font-bold text-xl ">Car Manufactory</Link>
         </div>
         <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
               {menuItem}

            </ul>
         </div>
         <div className='navbar-end'>
            <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            {/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
         </div>
      </div>
   );
};

export default Navber;