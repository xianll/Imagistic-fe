import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import AboutMe from './components/About';
import Contact from './components/Contact';
import DashSidebar from './components/DashSidebar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import GallerySidebar from './components/GallerySidebar';
import Home from './components/Home';
import Login from './components/Login';
import ManageImages from './components/ManageImages'
import Navbar from './components/Navbar';
import Upload from './components/Upload'



class App extends Component {
  state = {
    background: [ 
      'https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/divine_light.jpg',
      'https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/Pelican_Study.jpg',
      'https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/_MG_5366.jpg',
      'https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/Theres_a_Sunset_Somewhere_x_3.jpg',
      'https://res.cloudinary.com/dx0fhazu1/image/upload/v1548302393/Ignored.jpg',
      'https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/1559117/pexels-photo-1559117.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/342113/pexels-photo-342113.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/66187/pexels-photo-66187.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'


    ],
  imgArr1: null,
  imgArr2: null,
  imgArr3: null
}
componentDidMount() {
    const { background } = this.state
    const imgCount = background.length
    const imgArr1 =[]
    const imgArr2 =[]
    for (let i = 0; i < imgCount;) {
      if (i < imgCount) {
        imgArr1.push(background[i])
        i++
      }
      if (i < imgCount) {
        imgArr2.push(background[i])
        i++
      }
    }
    this.setState({ imgArr1, imgArr2 })
  }




  render() {
    const { imgArr1, imgArr2 } = this.state
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route 
          exact path="/gallery"
          render={props => <Gallery {...props} imgArr1={imgArr1} imgArr2={imgArr2} />}
          />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin/upload" component={Upload} />
          <Route exact path="/admin/manage" component={ManageImages} />
        </div>
      </BrowserRouter>
    )

    // const { imgArr1, imgArr2, imgArr3 } = this.state
    // const { pathname } = window.location
    // const params = pathname.substr(0)

    // if (params === '/') {
    //   return (
    //     <>
    //       <Home />
    //     </>
    //   )
    // } 
    // else if (params === '/gallery') {
    //   return(
    //     <div>
    //       <Navbar />
    //       <GallerySidebar />
    //       <Gallery imgArr1={imgArr1} imgArr2={imgArr2} imgArr3={imgArr3}/>
    //     </div>
    //   )
    // } 
    // else if (params === '/about') {
    //   return(
    //     <div>
    //       <Navbar />
    //       <AboutMe />
    //       <Footer />
    //     </div>
    //   )
    // } 
    // else if (params === '/contact') {
    //   return(
    //     <div>
    //       <Navbar />
    //       <Contact />
    //       <Footer />
    //   </div>
    //   )
    // }
    // else if (params ==='/admin/login') {
    //   return <Login />
    // } 
    // else if (params ==='/admin/upload') {
    //   return(
    //   <div>
    //     <DashSidebar />
    //     <Upload />
    //   </div>
    //   )
    // } 
    // else if (params === '/admin/manage') {
    //   return(
    //     <div>
    //       <DashSidebar />
    //       <ManageImages />
    //     </div>
    //   )
    // } else {
    //   return <h1>Error</h1>
    // }
  }
}

export default App;
