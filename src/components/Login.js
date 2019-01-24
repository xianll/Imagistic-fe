import React, { Component } from 'react';
import '../styles/login.css'


class Login extends Component {
  render() {
    return (
      <div className="loginPage">
        <h1>IMAGISTIC ADMIN</h1>
          <div className="titleLine">
          </div>
        <form className="loginForm" action="">
       
      
        <input type="text" placeholder='USERNAME'/>
        <br/>
        <br/>
       
        <input type="password" placeholder='PASSWORD'/>
        <br/>
        <button>Login</button>
        
        
        </form>




      </div>
    );
  }
}

export default Login;