import './Header.css';

var React=require('react');


 export const Header = () =>  {


    return    (
        
                <div className="header">

                    <img src ="img/kartees-logo.png"/>
                        
                        <div className = "navbarBlock">
                            <ul className = "navbar">
                            
                                <li>Services</li>
                                <li>Pricing</li>
                                <li>Support</li>

                            </ul>

                        </div>

                </div>
           );
  
}