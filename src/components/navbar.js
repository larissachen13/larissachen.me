import React from 'react';
// import { Link } from 'react-router';
import '../style.scss';
import scrollToElement from 'scroll-to-element';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  scroll(e) {
    scrollToElement('#portfolios', {
      offset: -100,
      ease: 'in-out-sine',
      duration: 1500,
    });
  }

  render() {
    return (
      <div className="navbarContainer">
        <div className="name"> Larissa Chen </div>
        <a rel="" className="smooth-scrolling" href="#" onClick={this.scroll}> <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i> </a>
      </div>
    );
  }
}

export default Navbar;
