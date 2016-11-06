import React from 'react'
import ConcertMap from '../concert_map/concert_map'

const Search = ({ ShowsByVenue, updateBounds }) => (
	<div className="interactive-map-container col-2-3">
		<div className="map-parent">
			<ConcertMap ShowsByVenue={ShowsByVenue} updateBounds={updateBounds}/>
		</div>
	</div>
);


export default Search;