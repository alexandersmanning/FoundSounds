import React from 'react'
import { withRouter } from 'react-router'
import UserShowsContainer from '../user_shows/user_shows_container'

const updatePath = (showId, router) => {
	debugger
	let currentPath = router.location.pathname
	if (currentPath !== "/") { currentPath += "/"}
	router.push({
		pathname: `${currentPath}shows/${showId}`, query: router.location.query
	})
}

const ShowsComponent = (props) => {
	return  (
		<ul className="show-list">
		{
			props.shows.map( show => {
				return <li className="artist-venue-name" key={show.showId}>
								<span 
									className="show-item-in-list"
									onClick={updatePath.bind(this,show.showId, props.router)}>
									{`${show.artists.join(", ")} at ${show.venueName}`}
								</span>
							
								</li>
			})
		}
		</ul>
	)
}

export default withRouter(ShowsComponent);

