import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import '../../index.css'
import {Header} from '../Header/Header.js';
import Main from '../Main/Main.js'
import {Details} from '../Details/Details.js';
import {Demo} from '../Demo/Demo.js';

class App extends Component {
  render() {
    return (
      <div className = "page-wrapper">
          <Header/>
          <br/><br/>
          <Main/>
          <br/>
          <Details/>
        </div>
    );
  }
}

export default App;
