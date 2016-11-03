import React from 'react'
import ConcertMap from '../concert_map/concert_map'
// import BenchIndex from '../bench_index'

const Search = ({ concerts, requestConcerts }) => (
	<div className="interactive-map-container col-2-3">
		<div className="map-parent">
			<ConcertMap />
		</div>
	</div>
);


export default Search;