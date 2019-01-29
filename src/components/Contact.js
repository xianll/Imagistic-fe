import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        This is the Contact Page.

        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default Contact;