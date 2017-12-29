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
        <h2>
          This is a test statement. 
        </h2>
        <div>
          {
            this.state.users.map(user => 
             <p key={user.id}>{user.username}</p>
            )
          }
          </div>
        <a href="/options">This is a test anchor</a>
      </div>
    );
  }
}

export default App;
