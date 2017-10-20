import './Header.css';
import React, { Component } from 'react';
import Scroll from 'react-scroll';
import {Details} from '../Details/Details';

var $ = require('jquery');
var Link  = Scroll.Link;


class Header extends Component {


    scroll(){
        $('details')[0].scrollIntoView( true );
    }

    render() {

    return    (
                
                <div className="header">

                    <div className="header-content">

                        <img src ="img/kartees-logo.png"/>
                            
                            <div className = "navbarBlock">
                                <ul className = "navbar">
                                    
                                    <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={-20} duration={500} >Services</Link></li>
                                    <li><Link activeClass="active" to="aboutus" spy={true} smooth={true} offset={-20} duration={500} >About Us</Link></li>
   

                                </ul>

                            </div>
                    </div>

                </div>
           );
  
        }
    }


export default Header;