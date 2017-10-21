import React, { Component } from 'react';
import './App.css';
import '../../index.css'
import Header from '../Header/Header.js';
import Main from '../Main/Main.js'
import {Details} from '../Details/Details.js';
import {Demo} from '../Demo/Demo.js';
import {About} from '../About/About.js';

if (process.env.VCAP_SERVICES){

  console.log('In App.js');
  var myvar= process.env.myVarName;
  console.log(myvar);

  console.log(process.env.VCAP_SERVICES);
}else{
  console.log('nope not found in app.js');
}



class App extends Component {
  render() {
    return (

      <div>
      <div className="background"></div>

      <div className = "page-wrapper">

          <Header/>
          <br/>
          <Main/>
          <br/><br/>
          <Details/>
   
          <About/>
  
      </div>
      </div>
    );
  }
}

export default App;
