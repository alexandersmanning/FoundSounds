import React from 'react'
import { withRouter } from 'react-router'
import UserShowsContainer from '../user_shows/user_shows_container'

const updatePath = (showId, router) => {
	router.push({
		pathname: `shows/${showId}`, query: router.location.query
	})
}

const ShowsComponent = (props) => {
	return  (
		<ul className="show-list">
		{
			props.shows.map( show => {
				return <li key={show.showId}>
								<span 
									className="show-item-in-list"
									onClick={updatePath.bind(this,show.showId, props.router)}>
									{`${show.artists.join(", ")} at ${show.venueName}`}
								</span>
								<UserShowsContainer showId={show.showId} />
								</li>
			})
		}
		</ul>
	)
}

export default withRouter(ShowsComponent);

