import React, { Component } from 'react';
import '../styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
        IMAGISTIC
        </div>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
      </div>
    );
  }
}

export default Navbar;