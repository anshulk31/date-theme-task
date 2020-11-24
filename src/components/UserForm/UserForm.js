import React, { Component} from 'react'
import { withRouter } from "react-router";

import './userForm.css'

class UserForm extends Component {
  state = {
      date: '',
      message: '',
      theme: ''
  }

  valueChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  themeSelectHandler = (e) => {
    e.preventDefault();
    this.setState({ theme :  e.target.value })
  }

  showUser = (e) => {
    e.preventDefault();
    if(this.state.date !== '') {
      this.props.history.push({ 
        pathname: '/output',
        state: {
          date: this.state.date,
          message: this.state.message,
          theme: this.state.theme
  
        }
       });
    }
  }

  render() {
    const { date, message, theme } = this.state
    return (
      <div className="Container">
        <form>
          <fieldset>
            <label>Select Date :</label>
            <input name="date" value={date}  onChange={this.valueChangeHandler} type="date" style={{ marginLeft: 86}}/>
          </fieldset>
          <fieldset>
            <label>Type in your message : </label> <br/>
            <textarea name="message" value={message}  onChange={this.valueChangeHandler}  rows="4" cols="50" style={{ marginLeft: 168}}/>
          </fieldset>
          <fieldset>
            <label>Select a theme for you : </label>
            <div className="themeContainer">
              <button 
                className="theme" 
                onClick={this.themeSelectHandler}
                value="#ec8600"
              >Theme 1</button>
              <button 
                className="theme" 
                onClick={this.themeSelectHandler} 
                style={{ backgroundColor: '#0049e7'}}
                value="#0049e7"
              >Theme 2</button>
              <button 
                className="theme" 
                onClick={this.themeSelectHandler} 
                style={{ backgroundColor: '#558000'}}
                value="#558000"
              >Theme 3</button>
            </div>  
          </fieldset>
          <button onClick={this.showUser}>Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(UserForm);