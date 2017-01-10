import React from 'react'
import { withRouter } from 'react-router'

const updatePath = (show, router, deselectMarker) => {
	deselectMarker(show.venueId);
	let currentPath = router.location.pathname;
	if (currentPath !== "/") { currentPath += "/"}
	router.push({
		pathname: `${currentPath}shows/${show.showId}`, query: router.location.query
	})
}

const SmallShows = (props) => {
	let imgArtist, artistName
	if (props.show.artists) {
		imgArtist = props.show.artists[Object.keys(props.show.artists)[0]]
	} else {
		return null
	}

	let imgUrl = imgArtist["img_url"]
	return (
		<li key={props.show.showId}
				className="artist-small-show" 
				onClick={
					updatePath.bind(this, props.show, props.router, props.deselectMarker)
				}
				onMouseEnter={props.selectMarker.bind(this, props.show.venueId)}
				onMouseLeave={props.deselectMarker.bind(this, props.show.venueId)}
				>
			<section className="artist-list-show-box">
				<div className="artist-small-image-container">
					<img className="artist-small-image" src={imgUrl} alt="artist-image"/>
					<img className="hidden-small-image" src={"http://res.cloudinary.com/ddvdi1pie/image/upload/a_180/v1478496195/b0g09gagwqn0ambv8ikz_edpj0c.jpg"} alt="hidden-image"/>
				</div>
				<section className="small-show-info">
					<h3 className="small-artist-name">{imgArtist.name}</h3>
					<h4 className="small-venue-name">{props.show.venueName}</h4>
				</section>
			</section>
		</li>
	)

}

export default withRouter(SmallShows);