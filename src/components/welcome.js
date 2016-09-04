import React from 'react';
import Portfolio from './portfolio';

const handleClick = (event) => {
  event.target.classList.toggle('active');
  event.target.parentElement.nextElementSibling.classList.toggle('show');
  event.target.parentElement.nextElementSibling.classList.toggle('hide');
};

// function based "dumb" component with no state
const Welcome = () => {
  return (
    <div>
      <div id="cover">
        <div className="about">
          <p id="first"> Software and Web Development and Design </p>
          <p id="middle"> Dartmouth Junior</p>
          <p id="last"> CS Major, Double Minor in Physics and Spanish </p>
          <i id="about-more-2" className="fa fa-2x fa-caret-right accordion" aria-hidden="true" onClick={handleClick}></i>
        </div>
        <div className="about-site panel">
          <h4> <span> About </span> </h4>
          <p> Hi, welcome to my site! This site is built with <span> React, CSS, and javascript </span> </p>
        </div>
      </div>
      <h4 className="portfolio-header"> Portfolio </h4>
      <Portfolio id="portfolios" />
      <footer>
        <span> Sept 2016 </span>
        <i className="fa fa-heart-o" aria-hidden="true"></i>
      </footer>
    </div>
  );
};


export default Welcome;
