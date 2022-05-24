import React from 'react';
import Footer from './Shared/Footer/Footer';
import Banner from './Banner';
import Products from './Products/Products';
import Reviews from './Reviews';
import Purchase from '../Purchase/Purchase';

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