import './About.css';
import Scroll from 'react-scroll';
var React=require('react');
var Element    = Scroll.Element;

export const About = () =>  {

	return (

		<Element name="aboutus" className="aboutElement">

				<ul>
					<li><img src="img/profile_pic.png"/>

					<h4>Morris Zeitouni</h4>
					<h8>Co-Founder</h8>
					</li>

					<li><img src="img/AI.png"/>
					
					<h4>Joseph Socarras</h4>
					<h8>Co-Founder</h8>
					
					</li>


				</ul>

		

		</Element>);

}