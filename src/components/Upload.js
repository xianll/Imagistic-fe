import React, { Component } from 'react';
import '../styles/upload.css';
import DashSidebar from './DashSidebar';
import AdminHeader from './AdminHeader';

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
    
  };

  render() {
    const { tagArray } = this.state
    return (
      <div className="formContainer">
          <AdminHeader/>
          <DashSidebar/>
        
        <form className="uploadForm">
          <label className="uploadFormLabels">Select Image to Upload</label>
          <br/>
          <input type="file" accept="image/*" className="uploadFormInputs"/>
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
          <input className="uploadFormInputs" type="tags" onChange={this.tagHandler} value={this.state.tag} name="Tags" required/>
          
          <button onClick={this.addTag} id="tagSubmit">+</button>
          <br/>
          <button onClick={this.submitForm} id="sumbitForm">Submit</button>

        </form> 
      </div>
    );
  }
}

export default Upload;