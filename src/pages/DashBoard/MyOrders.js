import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

   const [orders, setOrders] = useState([]);
   const [user] = useAuthState(auth);
   useEffect(() => {
      if (user) {
         fetch(`http://localhost:5000/order?buyer=${user.email}`, {
            method: 'GET',
            headers: {
               'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
         })

            .then(res => res.json())
            .then(data => setOrders(data))
      }
   }, [user])

   return (
      <div>
         <h2>My Orders: {orders.length}</h2>
         <div class="overflow-x-auto">
            <table class="table w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>quantity</th>
                     <th>email</th>
                     <th>service</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     orders.map((order, index) => <tr>
                        <th>{index + 1}</th>
                        <td>{order.buyerName}</td>
                        <td>{order.quantity}</td>
                        <td>{order.buyer}</td>
                        <td>{order.service}</td>
                     </tr>)
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyOrders;