import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import UserRow from './UserRow';

const AllUser = () => {
   const { data: users, isLoading, refetch } = useQuery('user', () => fetch('http://localhost:5000/user', {

      method: 'GET',
      headers: {
         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
   }).then(res => res.json()));

   if (isLoading) {
      return <Loading></Loading>
   }
   return (
      <div>
         <h1>All users:</h1>
         <h2 className="text-2xl">All Users: {users.length}</h2>
         <div class="overflow-x-auto">
            <table class="table w-full">

               <thead>
                  <tr>
                     <th></th>

                     <th>Email</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     users.map(user => <UserRow
                        key={user._id}
                        user={user}
                        refetch={refetch}
                     ></UserRow>)
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllUser;