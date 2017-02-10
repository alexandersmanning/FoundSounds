import React from 'react';
import {fetchArtistsByName,
	 fetchArtistById} from '../../util/shows_by_day_api_util';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ArtistSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {artistList: [] }		
		this.searchForArtist = this.searchForArtist.bind(this);
	}

	componentDidMount() {
		this.addArtist(this.props.filter.artistId, this.props.filter.artistName)
	}

	searchForArtist(inputValue){
		//This makes an api call to the artist using a name to pull all similar artists to display to the user as a list to pick from
		fetchArtistsByName(inputValue).done((data) => {
			let formatedData = data.map(artistRecord => {
				return { value: artistRecord.id, label: artistRecord.name }
			});

			this.setState({artistList: formatedData})
		})
	}

	addArtist(artistId, artistName){
		//This checks if the fiter has an artistId, and if so, it will set the state with the artist id and name
		if (artistId) {
			let artistRecord = { value: artistId, label: artistName }
			this.setState({artistList:[artistRecord], selectedArtist: artistId})
		} else {
			this.setState({selectedArtist: null})
		}

	}

	goToArtist(artistRecord) {
		//whenever an artist is selected, we add the artist to the local state so that it can be displayed, and removed by the user. Next, the artist is added to the filter, so a an api call is made to display all related shows

		//Whenever an artist is cleared, the artist is removed from the local state and then removed from the filter, calling the api to display shows per the other filter variables
		if (artistRecord) {
			this.addArtist(artistRecord.value, artistRecord.label)
			this.props.addArtistToFilter(artistRecord.value, artistRecord.label);
		} else {
			this.addArtist()
			this.props.removeArtistFromFilter();
		}
	}

	render() {
		return(
			<div className="artist-search-container">
				<Select 
					name="artist-search-bar"
					placeholder="search for artists"
					options={this.state.artistList}
					onInputChange={this.searchForArtist}
					onChange={this.goToArtist.bind(this)}
					value={this.state.selectedArtist}
				/>
			</div>
		)
	}

}

export default ArtistSearch;