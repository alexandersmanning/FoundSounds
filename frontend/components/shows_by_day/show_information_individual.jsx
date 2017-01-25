import React from 'react';
import dateFormat from 'dateformat';
import ArtistInformation from './artist_information';
import Slider from 'react-slick';
import { withRouter } from 'react-router';
import { displayDate } from '../../util/date_util';


const SingleShowInformation = props => {
	let showDate = displayDate(props.show.date);
	let pictureOptions = {
		dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
	};

	let showLink =	<a className="song-kick-link" href={props.show.url} target="_blank">See More On SongKick</a>

	return (
		<li key={props.show.showId}
				className="show-date"
		>
			<Slider {...pictureOptions}>
				{
					Object.keys(props.show.artists).map(key => {
						return (<div className="artist-image-container" key={key}>
							<img className="artist-image" src={props.show.artists[key].img_url} alt="artist-image"/>
							<img className="hidden-image" src={"http://res.cloudinary.com/ddvdi1pie/image/upload/a_180/v1478496195/b0g09gagwqn0ambv8ikz_edpj0c.jpg"} alt="hidden-image"/>
						</div>)
					})
				}
			</Slider>
			<h4>{showDate}</h4>
			<ul	className="artist-list">
				{
					Object.keys(props.show.artists).map(key =>
						<ArtistInformation key={key} artist={props.show.artists[key]}/>
					)
				}
			</ul>
			{showLink}
		</li>
		
	)
};

export default withRouter(SingleShowInformation);