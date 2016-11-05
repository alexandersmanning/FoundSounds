import React from 'react'
import dateFormat from 'dateformat'
import ArtistInformation from './artist_information'
import { withRouter } from 'react-router'

const updatePath = (showId, router) => {
	router.push({
		pathname: `shows/${showId}`, query: router.location.query
	})
}

const ShowInformation = props => {
	let showDate = dateFormat(props.show.date, "dddd, mmmm dS");
	return (
		<li className="show-date"
				onClick={updatePath.bind(this, props.show.showId, props.router)}
		>
			<h4>{showDate}</h4>
			<ul	className="artist-list">
				{
					Object.keys(props.show.artists).map(key =>
						<ArtistInformation artist={props.show.artists[key]}/>
					)
				}
			</ul>
		</li>
	)
};

export default withRouter(ShowInformation);