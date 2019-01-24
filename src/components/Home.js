import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <div id="SplashPage">
        <nav id="SplashNav">
          <a id='SplashLogo' href='/'>IMAGISTIC</a>
          <a className='SplashNavLinks' href='/Gallery'>GALLERY</a>
          <a className='SplashNavLinks' href='/About'>ABOUT</a>
          <a className='SplashNavLinks' href='/Contact'>CONTACT</a>
        </nav>
      </div>
    );
  }
}

export default Home;