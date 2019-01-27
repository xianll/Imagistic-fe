import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
        IMAGISTIC
        </div>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        

      </div>
    );
  }
}

export default Navbar;