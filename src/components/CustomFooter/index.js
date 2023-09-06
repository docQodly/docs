import React from 'react';
import './custom.css';

const CustomFooter = () => (
  <footer>
    <div class="footer footer--dark">
      <div class="ft-main">
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



