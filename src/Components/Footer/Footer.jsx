import React from 'react';
import './Footer.css';
import Praveen from '../../assets/Praveen Logo 2.svg' 
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
        <div className="footer-top-left">
            <img src={Praveen} alt="" />
            <p>I am a frontend developer from Chennai, India with 3.2 years of experience in Accenture Solutions Private Limited</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
                 </div>
                <div className="footer-subscribe">Subscribe</div>
        </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"><span>&copy;</span> Praveen Kumar Sekar. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
