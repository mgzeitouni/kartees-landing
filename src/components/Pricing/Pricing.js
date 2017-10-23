import '../Details/Details.css';
import Scroll from 'react-scroll';
var React=require('react');
var Element    = Scroll.Element;

export const Pricing = () =>  {

	return (


		<Element name="pricing" className="element">
			<h3>Pricing</h3><br/>
			<div className="list">

					<div className="listElement">
					<h4>Free Plan</h4>
					<h5>$0/month</h5>
					<p>Automate the sale of your your tickets, and track the status of each game. De-list games you would like to attend directly from our mobile app. Change pricing of tickets manually in our expertly designed calendar view of the season.</p>
					</div>

					<div className="listElement">
					<h4>Analyst Plan</h4>
					<h5>$5/month</h5>
					<p>Access a dashboard of analytics for your sales and profits numbers.</p>
					</div>

					<div className="listElement">
					<h4>Premium Plan</h4>
					<h5>$10/month</h5>
					<p>Allow our AI to automatically adjust the pricing of each ticket. Setup parameters for your risk profile to determine the bounds of pricing decisions.</p>
					</div>

			</div>
		
		</Element>);

}