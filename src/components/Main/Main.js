import './Main.css';
import React, { Component } from 'react';
import SubmitMessage from './SubmitMessage';
import Form from './Form';
var $ = require('jquery');

class Main extends Component {

 	constructor(props) {

	    super(props);
	    this.state = {formSubmitted:false};
	    this.handler = this.handler.bind(this);

  	}

  	 handler(e) {
  	 	console.log("handler runnign");
    	this.setState({
      	formSubmitted: true
    		})
  	}


 
  	render(){
		
		return (<div className = "mainSection">

					<h1>We manage your season tickets, so you can focus on your team </h1>

					<h2>Kartees uses Artificial Intelligence to manage and sell your season tickets for optimal profits.
					<br/>Enter your email address to become an early user!</h2>

					
					<div className="formBox">

				     {this.state.formSubmitted ? <SubmitMessage/>: <Form handler={this.handler}/>}
				    
				    </div>

				</div>);

	}


}

export default Main;