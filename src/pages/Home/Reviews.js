import React from 'react';
import review1 from '../../Asserts/image/review1.jpg'
import review2 from '../../Asserts/image/review2.jpg'
import review3 from '../../Asserts/image/review3.jpg'
import Review from './Review';

const Reviews = () => {
   const reviews = [
      {
         _id: 1,
         name: 'Keder Nath',
         review: 'this is very good organization of car-menufactory',
         location: "Bangladesh",
         img: review1



      },
      {
         _id: 2,
         name: 'Tooth Hander',
         review: 'this is very good organization of car-menufactory',
         location: "Bangladesh",
         img: review2



      },
      {
         _id: 3,
         name: 'Michel Jaction',
         review: 'this is very good organization of car-menufactory',
         location: "Bangladesh",
         img: review3



      },
   ]
   return (
      <section className='my-10'>
         <div>
            <h1 className='text-primary text-center text-4xl uppercase font-bold'>Our Product Review</h1>
         </div>
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
            {
               reviews.map(review => <Review
                  key={review._id}
                  review={review}
               ></Review>)
            }

         </div>

      </section>
   );
};

export default Reviews;