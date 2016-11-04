import React from 'react'
import dateFormat from 'dateformat'
import ArtistInformation from './artist_information'

const ShowInformation = props => {
	let showDate = dateFormat(props.show.date, "dddd, mmmm dS");
	return (
		<li className="show-date">
			{showDate}
			<ul	className="artist-list">
				{
					Object.keys(props.show.artists).map(key =>
						<ArtistInformation artist={props.show.artists[key]}/>
					)
				}
			</ul>
		</li>
	)
};

export default ShowInformation;