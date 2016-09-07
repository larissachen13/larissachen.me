import React, { Component } from 'react';
import Navbar from './navbar';
import Welcome from './welcome';

// example class based component (smart component)
class Home extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { up: true };
    this.changeToUp = this.changeToUp.bind(this);
    this.changeToDown = this.changeToDown.bind(this);
  }
  changeToUp() {
    if (this.state.up === false) {
      console.log('False');
      this.setState({ up: true });
    }
  }
  changeToDown() {
    if (this.state.up === true) {
      this.setState({ up: false });
    }
  }

  render() {
    return (
      <div>
        <Navbar up={this.state.up} />
        <Welcome changeToUp={this.changeToUp} changeToDown={this.changeToDown} />
      </div>
    );
  }
}

export default Home;
