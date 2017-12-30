import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavItem} from 'react-materialize';
import '../styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <section id="navigation">
        <Navbar brand='mueditor' right>
          <NavItem href='/send'>Send</NavItem>
          <NavItem href='/options'>Options</NavItem>
        </Navbar>
      </section>
    );
  }
}

export default Navigation;
