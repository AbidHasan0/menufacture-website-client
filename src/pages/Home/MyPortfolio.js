import React from 'react';

const MyPortfolio = () => {
   return (
      <div className='grid grid-cols gap-3 justify-items-center mt-2'>
         <div class="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body ">
               <h2 class="card-title">Name: Abid Hasan Rejvi</h2>
               <h2 class="card-title">Email: abidhassanrazvi001@gmail.com</h2>
               <h2 class="card-title">Education: SSC-2014,Hsc-2017, AND Wait to honours last year result(CSE) </h2>
               <p className='font-bold'>List of Technology and Skill- 2.CSS 3.Bootstrap 4.Tailwind 5.JavaScript 6.React 7.Firebase Authentication 8.React-Router 9.React-Dom 10.JWT 11.Node.js 12.MongoDB 13.Express 14.React-Form</p>
               <p className='font-bold'>Best 3 Project Link:

               </p>
               <a className='text-primary' href="https://lively-phoenix-af3e87.netlify.app">https://lively-phoenix-af3e87.netlify.app</a>


               <a className='text-info' href="//one-on-one-fitness-9b849.web.app/">//one-on-one-fitness-9b849.web.app/</a>

               <a className='text-success' href="//lively-phoenix-af3e87.netlify.app ">//lively-phoenix-af3e87.netlify.app </a>

            </div>
         </div>
      </div>
   );
};

export default MyPortfolio;