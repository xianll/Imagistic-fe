import React, { Component } from 'react';
import '../styles/contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        
        <div className="contact">
          <h1>CONTACT</h1>
            <div className="contactTitleLine">
            </div>

            <form className="contactForm" action=""> 
              <input type="text" placeholder='NAME'/>
                <br/>
                <br/>
              <input type="email" placeholder='EMAIL'/>
                <br/>
                <br/>
                <br/>


                <textarea rows="10" cols="10" placeholder="MESSAGE"form="usrform">
                </textarea>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
        <div className="contactPictures">

        </div>




      </div>
    );
  }
}

export default Contact;