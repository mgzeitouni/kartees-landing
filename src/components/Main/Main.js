import './Main.css';

import React, { Component } from 'react';


class Main extends Component {

 	constructor(props) {
	    super(props);
	    this.state = {email: ''};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
    	this.setState({email: event.target.value});
  	}

  	handleSubmit(event) {
    	alert('A name was submitted: ' + this.state.email);
    	event.preventDefault();
  	}


  	render(){
		
		return (<div className = "mainSection">

					<h1>We manage your season tickets, so you don't have to worry </h1>

					<h2>Kartees uses AI to manage and sell your season tickets for optimal profits. Enter your email address if you'd like to become an early user!</h2>

					<br/>
					<form onSubmit={this.handleSubmit}>
				 
				         <input className = "emailInput" type="text" placeholder = "Email" value={this.state.email} onChange={this.handleChange} />
				        
				        <input className = "submit" type="submit" value="Sign Up" />

				    </form>

				</div>);

	}


}

export default Main;