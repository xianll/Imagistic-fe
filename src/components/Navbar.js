import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
        IMAGISTIC
        </div>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    );
  }
}

export default Navbar;