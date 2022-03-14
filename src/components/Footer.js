import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer'>
        <div className='footer-wrapper'>
          <div class='footer-items'>
            <h2>Home Address</h2>
           <div className='item'>San Jose Del Monte, Bulacan</div>
          </div>
          <div className='footer-items'>
            <h2>Contact No.</h2>
            <div className='item'>09279407053</div>
          </div>
        </div>
        <div className='footer-wrapper'>
          <div className='footer-items'>
            <h2>Email</h2>
            <div className='item'>solivencerly@gmail.com</div>
          </div>
          <div className='footer-items'>
            <h2>LinkedIn</h2>
            <div className='item'>https://www.linkedin.com/in/sincerly-soliven-87994018b</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
