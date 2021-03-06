import React from 'react';
import dateFormat from 'dateformat';
import ArtistInformation from './artist_information';
import UserShowsContainer from '../user_shows/user_shows_container';
import Slider from 'react-slick';
import { withRouter } from 'react-router';
import { displayDate } from '../../util/date_util';

const updatePath = (showId, router) => {
	let modifiedRoute = findModifiedPath(router)
	router.push({
		pathname: `${modifiedRoute}shows/${showId}`, query: router.location.query
	})
};

const findModifiedPath = (router) => {
		let currentRouteName = router.getCurrentLocation().pathname;
		let endIdx = currentRouteName.indexOf("venue")
		if (endIdx === -1)
		{
			endIdx = currentRouteName.indexOf("show")
		}
		if (endIdx !== -1)
		 {
			currentRouteName = currentRouteName.slice(0, endIdx)
			} else {
				currentRouteName += '/'
			}
		return currentRouteName
	}

const ShowInformation = props => {
	let showDate = displayDate(props.show.date);

	let img_artist
	if (props.show.billing_index &&  props.show.artists[props.show.billing_index]){
		img_artist = props.show.artists[props.show.billing_index]
	} else if (props.show.artists) {
		img_artist = props.show.artists[Object.keys(props.show.artists)[0]]
	} else {
		return null
	}

	let showLink;
	if (props.displayShow) {
		showLink =	<a className="song-kick-link" href={props.show.url} target="_blank">See more on SongKick</a>
	} else { showLink = <div></div>}

	let img_url = img_artist["img_url"]

	return (
		<li key={props.show.showId}
				className="show-date"
				onClick={updatePath.bind(this, props.show.showId, props.router)}
		>
			<div className="artist-image-container">
				<img className="artist-image" src={img_url} alt="artist-image"/>
				<img className="hidden-image" src={"http://res.cloudinary.com/ddvdi1pie/image/upload/a_180/v1478496195/b0g09gagwqn0ambv8ikz_edpj0c.jpg"} alt="hidden-image"/>
			</div>
			<h4>{showDate}</h4>
			<ul	className="artist-list">
				{
					Object.keys(props.show.artists).map(key =>
						<ArtistInformation key={key} artist={props.show.artists[key]}/>
					)
				}
			</ul>
			{showLink}
		</li>
		
	)
};

export default withRouter(ShowInformation);