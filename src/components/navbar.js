import React from 'react';
// import { Link } from 'react-router';
import '../style.scss';
import { $ } from 'jquery';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  scroll(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#portfolios').offset().top,
    }, 2000);
  }

  render() {
    return (
      <div className="navbarContainer">
        <div className="name"> Larissa Chen </div>
        <a rel="" href="#portfolios" onClick={this.scroll}> <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i> </a>
      </div>
    );
  }
}

export default Navbar;
