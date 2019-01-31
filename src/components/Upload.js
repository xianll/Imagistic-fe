import React, { Component } from 'react';
import '../styles/upload.css';
import DashSidebar from './DashSidebar';
import AdminHeader from './AdminHeader';
import axios from 'axios';

class Upload extends Component {
  state = {
    tagArray: []
  };

  addTag = (e) => {
    e.preventDefault()
    const currentTag = this.state.tag
    if (currentTag) {
      this.setState({
        tagArray: [ ...this.state.tagArray, currentTag ]
      })
      this.setState({ tag: '' })
    }
    console.log(this.state.tag)
    console.log(this.state.tagArray)
  };

  tagHandler = (e) => {
    this.setState({ tag: e.target.value })
    
  };

  submitForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    const url = 'http://localhost:5000/auth/photo/upload'
    console.log(e.target.myImage.files[0])
    data.append('file', e.target.myImage.files[0]);
    axios.post(url, data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  render() {
    const { tagArray } = this.state
    return (
      <div className="formContainer">
          <AdminHeader/>
          <DashSidebar/>
        
        <form onSubmit={this.submitForm} className="uploadForm" encType="multipart/form-data">
          <label className="uploadFormLabels">Select Image to Upload</label>
          <br/>
          <input type="file" name="myImage" id="myImage" accept="image/*" className="uploadFormInputs"/>
          <br/>
          <label className="uploadFormLabels">Title : </label>
          <br/>
          <input type="text" className="uploadFormInputs"/>
          <br/>
          <label className="uploadFormLabels">Description : </label>
          <br/>
          <textarea rows="8" cols="60" ></textarea>
          <br/>
          <label className="uploadFormLabels">Tags : </label>
          {tagArray && tagArray.map((tag, index) => {
            return <span className="tagSpan" key={index}>{tag}</span>
          })}
          <br />
          <input className="uploadFormInputs" type="tags" onChange={this.tagHandler} value={this.state.tag} name="Tags"/>
          
          <button onClick={this.addTag} id="tagSubmit">+</button>
          <br/>
          <input type="submit" value="submit" id="sumbitForm" />

        </form> 
      </div>
    );
  }
}

export default Upload;