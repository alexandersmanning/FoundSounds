import React from 'react'
import { withRouter } from 'react-router'
import UserShowsContainer from '../user_shows/user_shows_container'
import SmallShows from './small_show_information'

const ShowsComponent = (props) => {
	let showList = props.shows.map( show =>  <SmallShows show={show}/>)

	return  (
		<ul className="show-list">
		{
			showList
		}
		</ul>
	)
}

export default withRouter(ShowsComponent);


	// <ul className="show-list">
	// 	{
	// 		props.shows.map( show => {
	// 			return <li className="artist-venue-name" key={show.showId}>
	// 							<span 
	// 								className="show-item-in-list"
	// 								onClick={updatePath.bind(this,show.showId, props.router)}>
	// 								{`${show.artists.join(", ")} at ${show.venueName}`}
	// 							</span>
	// 						</li>
	// 		})
	// 	}
	// 	</ul>

