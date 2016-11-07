import React from 'react'
import { withRouter } from 'react-router'

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
				return <li className="show-item-in-list"
										key={show.showId}
										onClick={updatePath.bind(this,show.showId, props.router)}
										>
								{`${show.artists.join(", ")} at ${show.venueName}`}
								</li>
			})
		}
		</ul>
	)
}

export default withRouter(ShowsComponent);

