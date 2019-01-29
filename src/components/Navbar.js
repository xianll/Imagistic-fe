import React, { Component } from 'react';
import '../styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
        IMAGISTIC
        </div>
        <a href="/gallery">GALLERY</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
      </div>
    );
  }
}

export default Navbar;