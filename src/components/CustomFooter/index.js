import React from 'react';
import './custom.css';

const CustomFooter = () => (
  <footer>
    <div class="footer footer--dark">
      <div class="ft-main">
        <div className="ft-main-item">
          <div class="container">
            <h1 class="fab">Join Our Newsletter</h1>
            <p class="description">Subscribe to our newsletter to get your weekly dose of news, updates, tips and special offers.</p>
            <form class="form-box">
              <div class="input-main">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /></svg>
                <input type="email" name="email" placeholder="Email"/>
              </div>
              <button class="submit" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Support</h2>
          <ul>
            <li>
              <a href="https://qodly.com/tutorials" target="_blank" rel="noopener noreferrer" className="footer__link-item"> Tutorials </a>
            </li>
            <li>
              <a href="https://support.4d.com/" target="_blank" rel="noopener noreferrer" className="footer__link-item" > Get Support </a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Company</h2>
          <ul>
            <li>
              <a href="https://qodly.com/about-us" target="_blank" rel="noopener noreferrer" className="footer__link-item" > About Qodly </a>
            </li>
            <li>
              <a href="https://us.4d.com/about-us" target="_blank" rel="noopener noreferrer" className="footer__link-item" > About 4D </a>
            </li>
            <li>
              <a href="mailto:contact@qodly.com" target="_blank" rel="noopener noreferrer" className="footer__link-item" > Contact us </a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Follow Us</h2>
          <a class="icon-button slack" href="https://join.slack.com/t/qodly/shared_invite/zt-20ieeffts-NU57SOXcbakmWgIMnJpStQ" target="_blank" rel="noopener noreferrer">
            <i class="slack"></i>
            <span></span>
          </a>
          <a class="icon-button facebook" href="https://www.facebook.com/qodlyby4d" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
            <span></span>
          </a>
          <a class="icon-button twitter" href="https://twitter.com/qodlyby4d" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-x-twitter"></i>
            <span></span>
          </a>
          <a class="icon-button youtube" href="https://www.youtube.com/channel/UCLNHKvjJQZ_5D1ziskba6jg" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube"></i>
            <span></span>
          </a>
          <a class="icon-button linkedin" href="https://linkedin.com/showcase/qodly" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
            <span></span>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center p-3" style={{backgroundColor: 'rgb(38, 45, 56)', color: 'white'}}>
      Copyright © {new Date().getFullYear()} 4D SAS - All rights reserved
    </div>
  </footer>

);



export default CustomFooter;


