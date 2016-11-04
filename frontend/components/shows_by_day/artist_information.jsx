import React from 'react'

const artistInformation = props => {
	return (
		<li className="artist-info">{props.artist.name}</li>
	)
};

export default artistInformation;