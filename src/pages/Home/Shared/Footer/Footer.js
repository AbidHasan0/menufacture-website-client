import React from 'react';

const Footer = () => {
   return (
      <footer className="p-10 bg-neutral text-neutral-content mt-6">
         <div className='footer'>
            <div>
               <span class="footer-title">Products</span>
               <a class="link link-hover">Tyre</a>
               <a class="link link-hover">Piston</a>
               <a class="link link-hover">Motor</a>
               <a class="link link-hover">Car Door</a>
            </div>
            <div>
               <span class="footer-title">Company</span>
               <a class="link link-hover">About us</a>
               <a class="link link-hover">Contact</a>
               <a class="link link-hover">Jobs</a>
            </div>
            <div>
               <span class="footer-title">Legal</span>
               <a class="link link-hover">Terms of use</a>
               <a class="link link-hover">Privacy policy</a>
            </div>
         </div>
         <footer class="footer footer-center mt-4 bg-base-300 text-base-content">
            <div>
               <p>Copyright © 2022 - All right reserved by Abid Hasan Rejvi</p>
            </div>
         </footer>
      </footer>
   );
};

export default Footer;