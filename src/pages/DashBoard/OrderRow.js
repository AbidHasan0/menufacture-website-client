import React from 'react';

const OrderRow = ({ order }) => {
   const { buyer, buyerName, service, phone, address, quantity } = order
   // const { email } = user;
   return (
      <tr>
         <th>1</th>
         <td>{buyerName}</td>
         <td>{buyer}</td>
         <td>{service}</td>
         <td>{phone}</td>
         <td>{quantity}</td>


      </tr>
   );
};

export default OrderRow;