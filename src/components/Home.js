import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {

  state = {
    background:[
      'https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/divine_light.jpg','https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/Pelican_Study.jpg',
      'https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/_MG_5366.jpg',
      'https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/Theres_a_Sunset_Somewhere_x_3.jpg',
      'https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/Ignored.jpg'
  ], 
    counter: 0};

  handleImageClick = (images) => {
   console.log(this.state.counter)
    this.setState({counter: this.state.counter + 1})
    if (this.state.counter === 4){
      this.setState({counter: 0})
    }
  }

  render() {
  const image = this.state.background[this.state.counter]

    return (
  
      <div id="SplashPage" onClick={this.handleImageClick} style={{backgroundImage: `url(${image})`}}>
      
        <>
          <a id='SplashLogo' href='/'>IMAGISTIC</a>
          <a className='SplashNavLinks' href='/Gallery'>GALLERY</a>
          <a className='SplashNavLinks' href='/About'>ABOUT</a>
          <a className='SplashNavLinks' href='/Contact'>CONTACT</a>
        </>
      </div>
    );
  }
}

export default Home;