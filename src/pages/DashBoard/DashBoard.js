import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
// import auth from '../../firebase.init';
// import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {


   return (
      <div class="drawer drawer-mobile">
         <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
         <div class="drawer-content text-center my-2 ">
            <h2 className='text-4xl font-bold text-purple-700'>Your DashBoard</h2>
            <Outlet></Outlet>

         </div>
         <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
               {/* <!-- Sidebar content here --> */}
               <li><Link to="/dashboard">My Orders</Link></li>
               <li><Link to="/dashboard/review">My Reviews</Link></li>
               <li><Link to="/dashboard/profile">My Profile</Link></li>
               <li><Link to="/dashboard/orders">All Orders</Link></li>
               <li><Link to="/dashboard/user">All Users</Link></li>
               <li><Link to="/dashboard/addproduct">Add Product</Link></li>
            </ul>

         </div>
      </div>
   );
};

export default DashBoard;