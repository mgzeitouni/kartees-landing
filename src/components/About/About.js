import '../Details/Details.css';
import './About.css';
import Scroll from 'react-scroll';
var React=require('react');
var Element    = Scroll.Element;

export const About = () =>  {

	return (


		<Element name="about" className="element">
			<h3>About Us</h3><br/>
			<div className="list">

					<div className="listElement"><img src="img/morris.png"/>
					<h4>Morris Zeitouni</h4>
					<h5>Founder</h5>
					<p>As a loyal season ticket owner of the New York Mets, Morris faced the difficulties of managing his own season ticket, which led to the creation of Kartees. Prior to founding Kartees, Morris worked as a developer and consultant at IBM Watson, where he helped businesses design and deploy Artificially Intelligent solutions. Morris holds a B.S. in Industrial Engineering & Management Science from Northwestern University. </p>
					</div>

					<div className="listElement"><img src="img/joseph.png"/>
					<h4>Joseph Socarras</h4>
					<h5>Co-Founder</h5>
					<p>Joseph is aligned to Accenture's Oracle Analytics practice, where he serves clients in multiple functional and technical analytics delivery capacities surrounding advanced business intelligence enablement. Previously at the Miami Heat, Joseph oversaw the development of multiple machine learning tools built around proprietary statistical data. Joseph holds a B.S. in Biomedical Engineering from the University of Miami. </p>
					</div>

					<div className="listElement"><img src="img/eddie.png"/>
					<h4>James Rosen</h4>
					<h5>Lead Designer</h5>
					<p>As a former marketing analyst at Apple, James found a passion for creating superior user experiences and delivering solutions to today's practical problems. James holds a B.A. in Marketing from the Wharton School of Business, and an M.S. in Product Design from the University of Pennsylvania.</p>
					</div>

			</div>
		
		</Element>);

}