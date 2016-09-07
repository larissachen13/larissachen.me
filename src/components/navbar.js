import React from 'react';
// import { Link } from 'react-router';
import '../style.scss';
import scrollToElement from 'scroll-to-element';

class Navbar extends React.Component {
  scroll(e) {
    scrollToElement('#portfolios', {
      offset: -100,
      ease: 'in-out-sine',
      duration: 1500,
    });
  }
  scrollUp(e) {
    scrollToElement('#cover', {
      offset: 0,
      ease: 'in-out-sine',
      duration: 1500,
    });
  }

  render() {
    let arrow;
    if (this.props.up === true) {
      arrow = <i className="fa fa-chevron-down fa-2x" aria-hidden="true" onClick={this.scroll}></i>;
    } else {
      arrow = <i className="fa fa-chevron-up fa-2x" aria-hidden="true" onClick={this.scrollUp}></i>;
    }
    return (
      <div className="navbarContainer">
        <div className="name"> Larissa Chen </div>
        <span className="smooth-scrolling" > {arrow} </span>
      </div>
    );
  }
}

export default Navbar;
