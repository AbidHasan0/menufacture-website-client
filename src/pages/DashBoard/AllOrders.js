import userEvent from '@testing-library/user-event';
import React from 'react';
import { useQuery } from 'react-query';
import { useResolvedPath } from 'react-router-dom';
import Loading from '../Home/Shared/Loading';
import OrderRow from './OrderRow';

const AllOrders = () => {
   const { data: orders, isLoading } = useQuery('order', () => fetch('https://immense-badlands-11889.herokuapp.com/order').then(res => res.json()));

   if (isLoading) {
      return <Loading></Loading>
   }
   return (
      <div>
         <h2 className="text-2xl">All Orders: {orders.length}</h2>
         <div class="overflow-x-auto">
            <table class="table w-full">

               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Product</th>
                     <th>Phone</th>
                     <th>Quantity</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     orders.map(order => <OrderRow
                        key={order._id}
                        order={order}
                     ></OrderRow>)
                  }

               </tbody>
            </table>
         </div>

      </div>
   );
};

export default AllOrders;