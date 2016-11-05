import React from 'react'
import { Link } from 'react-router'

const artistInformation = props => {
	return (
		<li className="artist-info">
			{props.artist.name}
		</li>
	)
};

export default artistInformation;