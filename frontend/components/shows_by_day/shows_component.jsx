import React from 'react'

const ShowsComponent = (props) => {
	return  (
		<ul className="show-list">
		{
			props.shows.map( show => {
				return <li className="show-item"
										key={show.showId}>
								{`${show.artists.join(", ")} at ${show.venueName}`}
								</li>
			})
		}
		</ul>
	)
}

export default ShowsComponent;