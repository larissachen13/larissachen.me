import React from 'react';
import Portfolio from './portfolio';

// function based "dumb" component with no state
const Welcome = () => {
  return (
    <div>
      <div id="cover">
        <div className="about">
          <p id="first"> Software and Web Development and Design </p>
          <p id="middle"> Dartmouth Junior</p>
          <p id="last"> CS Major, Double Minor in Physics and Spanish </p>
        </div>
      </div>
      <h4 className="portfolio-header"> Portfolio </h4>
      <Portfolio />
      <footer>
        <i className="fa fa-heart-o" aria-hidden="true"></i>
        <span> Sept 2016 </span>
      </footer>
    </div>
  );
};


export default Welcome;
