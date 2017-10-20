import '../Details/Details.css';
import Scroll from 'react-scroll';
var React=require('react');
var Element    = Scroll.Element;

export const About = () =>  {

	return (

		<Element name="about" className="element">

			<div className="list">
				<ul>
					<li><img src="img/profile_pic.png"/>
					<h4>Morris Zeitouni</h4>
					<h5>Founder</h5>
					<h8>As a loyal season ticket owner of the New York Mets, Morris faced the difficulties of managing his own season ticket, which led to the creation of Kartees. Prior to founding Kartees, Morris worked as a developer and consultant for IBM Watson IoT, where he helped businesses design and deploy Artifically Intelligent solutions. Morris holds a B.S. in Industrial Engineering & Management Science from Northwestern University. </h8>
					</li>

					<li><img src="img/AI.png"/>
					<h4>Co-Founder</h4>
					<h5>Joseph Socarras</h5>
					<h8></h8>
					</li>

					<li><img src="img/eddie.jpg"/>
					<h4>James Rosen</h4>
					<h5>Lead Designer</h5>
					<h8>James previously worked as a marketing analyst at Apple. James holds a B.A. in Marketing from the Wharton School of Business, and M.S. in Product Design from the University of Pennsylvania.</h8>
					</li>

				</ul>

		
			</div>

		</Element>);

}