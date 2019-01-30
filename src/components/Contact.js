import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        
        <div className="contactContainer">
            <div className="contact">
                <h1>CONTACT</h1>
          
                <div className="contactTitleLine">
                </div>

                    <form className="contactForm" action="">
                    <input type="text" id="name" placeholder='NAME' onChange={this.handleInput}/>
                    <br/>
                    <br/>        
                    <input type="text" id="email" placeholder='EMAIL' onChange={this.handleInput}/>
                    <br/>
                    <br/>

                    <textarea rows="5" cols="100" name="comment" form="usrform" placeholder='MESSAGE'></textarea>
                    <br/>
                    <input type="submit" value="Submit" id="loginButton" onClick={this.handleLogin}/>
                    </form>
            </div>
            <div className="contactPicture">
            </div>




        </div>

        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default Contact;