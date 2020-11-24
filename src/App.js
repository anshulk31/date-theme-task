import React, { Component } from 'react'

import logo from './logo.svg';
import UserForm from './components/UserForm/UserForm'
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <header className="header">Hello User !</header>
        <div style={{ margin: 'auto', padding: 50 }}>
          <UserForm/>
        </div>  
      </div>
    )
  }
}

export default App;
