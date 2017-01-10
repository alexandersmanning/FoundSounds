import React from 'react';
import { withRouter } from 'react-router';
import UserShowsContainer from '../user_shows/user_shows_container';
import SmallShows from './small_show_information';

const ShowsComponent = (props) => {
	let showList = props.shows.map( show =>  <SmallShows 
		show={show}
		key={show.showId}
		selectMarker={props.selectMarker}
		deselectMarker={props.deselectMarker}
	/>)

	return  (
		<ul className="show-list" key={props.date_value}>
			{showList}
		</ul>
	)
}


export default withRouter(ShowsComponent);


