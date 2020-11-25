import React, { Component } from 'react'

import UserForm from './components/UserForm/index'
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <header className="header">Hello User !</header>
        <div className="formContainer">
          <UserForm/>
        </div>  
      </div>
    )
  }
}

export default App;
