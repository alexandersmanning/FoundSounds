import React from 'react';
import {fetchArtistsByName} from '../../util/shows_by_day_api_util';

class ArtistSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {artistList: []}
		this.searchForArtist = this.searchForArtist.bind(this);
	}

	searchForArtist(event){
		fetchArtistsByName(event.target.value).done((data) => {
			this.setState({artistList: data})
		})
	}

	render() {
		return(
			<div className="artist-search-container">
				<form>
					<input
						placeholder="search by artist"
						onChange={this.searchForArtist} 
					></input>
				</form>
				<ul>
				{
					this.state.artistList.map((artistObject) => {
						return <li key={artistObject.id}>{artistObject.name}</li>
					})
				}
				</ul>
			</div>
		)
	}

}

export default ArtistSearch;