import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch("/users")
    .then(res => res.json())
    .then(users => this.setState({users}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          User information will be printed below
        </p>
        <ul>
          {
            this.state.users.map (user =>
              <li key={user.id}>{user.username}</li> 
            )
          }
          </ul> 
      </div>
    );
  }
}

export default App;
