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
	let img_url = props.show.artists[props.show.billing_index]["img_url"]

	img_url = img_url || props.show.artists[0]["img_url"]

	return (
		<li key={props.show.showId}
				className="show-date"
				onClick={updatePath.bind(this, props.show.showId, props.router)}
		>
			<div className="artist-image-container">
				<img className="artist-image" src={img_url} alt="artist-image"/>
				<img className="hidden-image" src={"http://res.cloudinary.com/ddvdi1pie/image/upload/v1478496195/b0g09gagwqn0ambv8ikz_edpj0c.jpg"} alt="hidden-image"/>
			</div>
			<h4>{showDate}</h4>
			<ul	className="artist-list">
				{
					Object.keys(props.show.artists).map(key =>
						<ArtistInformation key={key} artist={props.show.artists[key]}/>
					)
				}
			</ul>
		</li>
	)
};

export default withRouter(ShowInformation);