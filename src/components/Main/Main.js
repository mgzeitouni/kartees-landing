import './Main.css';
import React, { Component } from 'react';

var request = new XMLHttpRequest();

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

  		var data = new FormData();
		data.append("email", this.state.email);

		request.open('POST', 'https://kartees-landing-page-services.mybluemix.net/new-email', true);
		request.setRequestHeader("cache-control", "no-cache");
		request.send(data);

		alert('Email ' + this.state.email +' Sent!');
    	event.preventDefault();

    }

  	render(){
		
		return (<div className = "mainSection">

					<h1>We manage your season tickets, so you don't have to worry </h1>

					<h2>Kartees uses AI to manage and sell your season tickets for optimal profits. Enter your email address if you'd like to become an early user!</h2>

					<br/>

					<form onSubmit={this.handleSubmit}>
				 
				        <input className = "emailInput" type="text" placeholder = "Email" value={this.state.email} onChange={this.handleChange} />
				       
				        <button type="submit" value="Sign Up">Sign Up </button>

				    </form>

				</div>);

	}


}

export default Main;