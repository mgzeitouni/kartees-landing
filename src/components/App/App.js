import React, { Component } from 'react';
import './App.css';
import '../../index.css'
import Header from '../Header/Header.js';
import Main from '../Main/Main.js'
import {Details} from '../Details/Details.js';
import {Demo} from '../Demo/Demo.js';
import {About} from '../About/About.js';
import {Pricing} from '../Pricing/Pricing.js';

if (process.env.VCAP_SERVICES){

  console.log('In App.js');
  var myvar= process.env.myVarName;
  console.log(myvar);

  console.log(process.env.VCAP_SERVICES);
}else{
  console.log('nope not found in app.js');
}



class App extends Component {

constructor() {
  super();
  this.state = {
    width: window.innerWidth,
  };
}

componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

// make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};



  render() {

    return (
       <div>
      <div className="background"></div>

      <div className = "page-wrapper">

          <Header/>
          
          <Main/>
          <br/><br/>
          <Details/>
          <Pricing/>
          <About/>
  
      </div>
      </div>
    );

  //   const { width } = this.state;
  //   const isMobile = width <= 500;

  //   if (isMobile) {
  //   return (
  //     <p>Heyyyyy world</p>
  //   );
  // } else {
  //   return (
  //      <div>
  //     <div className="background"></div>

  //     <div className = "page-wrapper">

  //         <Header/>
  //         <br/>
  //         <Main/>
  //         <br/><br/>
  //         <Details/>
        
  //         <About/>
  
  //     </div>
  //     </div>
  //   );
  // }

  }
}

export default App;
