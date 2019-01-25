import React, { Component } from 'react';
import '../styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <a href="/" className="logo">IMAGISTIC</a>
        <div className="nav_links">
          <a href="/gallery">GALLERY</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT</a>
        </div>
      </div>
    );
  }
}

export default Navbar;