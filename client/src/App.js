import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Components/Navigation';
import EditorView from './Components/EditorView';
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
        <Navigation/>
        <EditorView/>
      </div>
    );
  }
}


export default App;
