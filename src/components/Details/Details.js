import './Details.css';
import Scroll from 'react-scroll';
var React=require('react');
var Element    = Scroll.Element;

export const Details = () =>  {

	return (
		<Element name="services" className="element">
			<h3>Services</h3><br/>
			<div className="list">
		
					<div className="listElement"><img src="img/manage.png"/>

					<h4>Automated Ticket Management</h4>
					<p>To get started, simply tell us where your seats are. Kartees will upload and list them on trusted marketplaces such as Stubhub. We'll keep track of all sales, and make sure each ticket is listed.</p>
					</div>

					<div className="listElement"><img src="img/reports.png"/>
					<h4>Real Time Analytics Dashboard</h4>
					<p>Track your sales progress with ROI and profitability reports for the season. Learn your sales numbers across various opponents, weather conditions, and days of the week.</p>
					</div>

					<div className="listElement"><img src="img/AI.png"/>
					<h4>Optimize Profitability & Ticket Sales</h4>
					<p>Our AI learns how the secondary ticket market moves. Using your team's performance and past pricing trends, Kartees will automatically adjust your tickets' prices every few minutes to ensure optimal profits.</p>
					
					</div>


			</div>
			<br/>
			</Element>);

}