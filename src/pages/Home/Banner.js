import React from 'react';
import Car from '../../Asserts/image/Car.jpg'

const Banner = () => {
   return (
      <div class="hero min-h-screen bg-red-200 px-12">
         <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={Car} class="w-80 h-400" />
            <div>
               <h3 class="text-5xl font-bold py-2"> All Car Products Available</h3>
               <p class="py-2">Daimler is a Germany-based multinational automobile manufacturer. The company manufactures passenger cars, vans, off-road vehicles, and commercial vehicles, such as transport trucks and buses. It produces vehicles under a number of different brands, including Daimler, Mercedes-Benz, FUSO, Western Star, smart, and more.</p>
               <button class="btn btn-primary uppercase text-white ">Get Started</button>
            </div>
         </div>
      </div >
   );
};

export default Banner;