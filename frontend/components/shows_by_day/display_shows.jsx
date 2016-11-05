import React from 'react'
import ShowInformation from './show_information'
import { Link } from 'react-router'

//THIS WILL be used to display the show's information
const DisplayShows = (props) => {
	return (
		<content className="full-show-information">
			<section className="venue-information">
				<h3 className="title">Venue</h3>
				<h4 className="venue-name">{props.venue.name}</h4>
				<span className="venue-address">
					{`${props.venue.address}, ${props.venue.city}, ${props.venue.state}`}
				</span>
			</section>
			<section className="show-information-container">
				<h3 className="shows">Shows</h3>
				<ul className="show-information">
					{
						Object.keys(props.venue.Shows).map(key => (
							<ShowInformation show={props.venue.Shows[key]}/>
						))
					}
				</ul>
			</section>
		</content>
	)
};

export default DisplayShows;