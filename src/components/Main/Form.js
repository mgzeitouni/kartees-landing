import React, { Component } from 'react';
var $ = require('jquery');

class Form extends Component {


	constructor(props) {
	    super(props);
	    this.state = {email: '', spinner:false};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
    	this.setState({email: event.target.value});
  	}


  	handleSubmit(event){
  	
  	//document.getElementById("formButton").style.visibility="hidden";
  	this.setState({"spinner":true});

  	var data = new FormData();
  	data.append('email',this.state.email);
    data.append('timestamp',new Date().getTime());

  	console.log(data)
  	$.ajax({
      url:"http://localhost:5001/new-email",
      //url: 'https://kartees-landing-page-services.mybluemix.net/new-email',
      type: 'POST',
      data: data,
      processData: false,
      contentType: false,
      // cache: false,
      success: function(data) {
      	this.setState({"spinner":false});
        this.props.handler();
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error( status, err.toString());
      }.bind(this)
    });

    event.preventDefault();

  	}

  render() {

    return (					
			<form onSubmit={this.handleSubmit}>
		 	
		        <input className = "emailInput" type="text" placeholder = "Email" value={this.state.email} onChange={this.handleChange} />
		       
		    {!this.state.spinner ? <button className="formButton" type="submit" value="Sign Up">Sign Up </button>:null}
				
				{this.state.spinner ? <img className="spinner" src="img/spinner.gif" alt="spinner"/>: null}
		    
		    </form>);
  }
}


export default Form;