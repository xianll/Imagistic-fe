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
        
          <Link to="/contact" className="navBarLinks">CONTACT</Link>
          <Link to="/about" className="navBarLinks">ABOUT</Link>
          <Link to="/gallery" className="navBarLinks">GALLERY</Link>
        
      </div>
    );
  }
}

export default Navbar;