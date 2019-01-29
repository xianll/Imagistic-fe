import React, { Component } from 'react';
import '../styles/Gallery.css';

class Gallery extends Component {

  render() {
    const { imgArr1, imgArr2, imgArr3 } = this.props
    console.log(imgArr1)
    if(imgArr1) {
    return (
      <div className="bigGalleryContainer">
      <div className="gallerySideBar">
      <strong>Album</strong>
      <a href='#'>Album of the long lost lovers</a><br/>
      <strong>tags:&ensp; &nbsp;</strong>
      <a href='#'>drinks</a>,
      <a href='#'>party</a>,
      <a href='#'>nightlife</a>
    
      </div>
        <div className="galleryPictureContainer">
          
          <div className="column">
          {imgArr1.map((img, index) => {
            return (
              <img src={img} key={index}/>
            )
          })}
          </div>
          <div className="column">
          {imgArr2.map((img, index) => {
            return (
              <img src={img} key={index}/>
            )
          })}
            </div> 
          <div className="column">
          {imgArr3.map((img, index) => {
            return (
              <img src={img} key={index}/>
            )
            })}
            </div> 
        </div>
      </div>
    );
    } else {
      return <h1>Loading...</h1>
    }
  }
}
export default Gallery;