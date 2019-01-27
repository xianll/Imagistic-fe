import React, { Component } from 'react';

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
  render() {
    const { pathname } = window.location
    const params = pathname.substr(0)

    if (params === '/') {
      return (
        <>
          <Home />
        </>
      )
    } 
    else if (params === '/gallery') {
      return(
        <div>
          <Navbar />
          <GallerySidebar />
          <Gallery />
        </div>
      )
    } 
    else if (params === '/About') {
      return(
        <div>
          <Navbar />
          <AboutMe />
          <Footer />
        </div>
      )
    } 
    else if (params === '/contact') {
      return(
        <div>
          <Navbar />
          <Contact />
          <Footer />
      </div>
      )
    }
    else if (params ==='/admin/login') {
      return <Login />
    } 
    else if (params ==='/admin/upload') {
      return(
      <div>
        <DashSidebar />
        <Upload />
      </div>
      )
    } 
    else if (params === '/admin/manage') {
      return(
        <div>
          <DashSidebar />
          <ManageImages />
        </div>
      )
    } else {
      return <h1>Error</h1>
    }
  }
}

export default App;
