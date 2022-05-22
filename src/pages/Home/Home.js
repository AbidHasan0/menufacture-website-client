import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Products from './Products/Products';
import Reviews from './Reviews';

const Home = () => {
   return (
      <div className='px-12'>
         <Banner></Banner>
         <Products></Products>
         <Reviews></Reviews>
         <Footer></Footer>
      </div>
   );
};

export default Home;