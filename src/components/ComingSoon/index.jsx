import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import './custom.css';

export function ComingSoon(){
  return <div class="mainWrapper">
          <div class="subWrapper">
              <h1>Coming soon</h1>
              <div class="wrapperCircles">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="shadow"></div>
                  <div class="shadow"></div>
                  <div class="shadow"></div>
              </div>
          </div>
          <p>Our tech documentation maestros are diligently orchestrating something truly valuable, just for you!</p>
          <p>Stay tuned for a valuable addition to your Qodly experience.</p>
        </div>;
}

export default ComingSoon;
