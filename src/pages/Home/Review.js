import React from 'react';

const Review = ({ review }) => {
   return (
      <div class="card w-96 bg-base-100 shadow-xl">
         <div class="card-body">
            <h2 class="card-title">{review.name}</h2>
            <p>{review.review}</p>
            <p>{review.location}</p>
            <div class="avatar">
               <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={review.img} alt="" />

               </div>
            </div>

         </div>
      </div>
   );
};

export default Review;