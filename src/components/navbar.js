import React from 'react';
// import { Link } from 'react-router';
import '../style.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbarContainer">
        <div className="name"> Larissa Chen </div>
      </div>
    );
  }
}

export default Navbar;
