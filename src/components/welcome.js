import React from 'react';
import Portfolio from './portfolio';

const handleClick = (event) => {
  event.target.classList.toggle('active');
  event.target.parentElement.nextElementSibling.classList.toggle('show');
  event.target.parentElement.nextElementSibling.classList.toggle('hide');
};

// function based "dumb" component with no state
const Welcome = (props) => {
  return (
    <div>
      <div id="cover">
        <div className="about">
          <p id="first"> Software Development and Design </p>
          <p id="middle"> Dartmouth &#39;18</p>
          <p id="last"> CS Major, Double Minor in Physics and Spanish </p>
          <i id="about-more-2" className="fa fa-2x fa-caret-right accordion" aria-hidden="true" onClick={handleClick}></i>
        </div>
        <div className="about-site panel">
          <h4> <span> About </span> </h4>
          <p> Hi, welcome to my site! This site is built with <span> React, CSS, and javascript </span> </p>
        </div>
      </div>
      <h4 className="portfolio-header"> Portfolio </h4>
      <Portfolio changeToUp={props.changeToUp} changeToDown={props.changeToDown} />
      <footer>
        <span> Jan 2018 </span>
        <i className="fa fa-heart-o heart" aria-hidden="true"></i>
      </footer>
    </div>
  );
};


export default Welcome;
