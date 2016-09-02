import React, { Component } from 'react';
import Navbar from './navbar';

// example class based component (smart component)
class Home extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default Home;
