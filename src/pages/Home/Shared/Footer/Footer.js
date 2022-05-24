import React from 'react';

const Footer = () => {
   return (
      <footer className="p-10 bg-neutral text-neutral-content">
         <div className='footer'>
            <div>
               <span class="footer-title">Services</span>
               <a class="link link-hover">Branding</a>
               <a class="link link-hover">Design</a>
               <a class="link link-hover">Marketing</a>
               <a class="link link-hover">Advertisement</a>
            </div>
            <div>
               <span class="footer-title">Company</span>
               <a class="link link-hover">About us</a>
               <a class="link link-hover">Contact</a>
               <a class="link link-hover">Jobs</a>
               <a class="link link-hover">Press kit</a>
            </div>
            <div>
               <span class="footer-title">Legal</span>
               <a class="link link-hover">Terms of use</a>
               <a class="link link-hover">Privacy policy</a>
               <a class="link link-hover">Cookie policy</a>
            </div>
         </div>
         <footer class="footer footer-center p-4 bg-base-300 text-base-content">
            <div>
               <p>Copyright © 2022 - All right reserved by Abid Hasan Rejvi</p>
            </div>
         </footer>
      </footer>
   );
};

export default Footer;