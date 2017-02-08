import React from 'react';
import {fetchArtistsByName,
	 fetchArtistById} from '../../util/shows_by_day_api_util';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ArtistSearch extends React.Component {
	constructor(props) {
		super(props);
		//set selectedArtist to either the state variable or null, possible issues pulling record 
		this.state = {artistList: [] }		
		this.searchForArtist = this.searchForArtist.bind(this);
	}

	componentDidMount() {
		this.addArtist(this.props.filter.artistId)
	}

	// componentWillReceiveProps() {
	// 	this.addArtist(this.props.filter.artistId)
	// }

	searchForArtist(inputValue){
		fetchArtistsByName(inputValue).done((data) => {
			let formatedData = data.map(artistRecord => {
				return { value: artistRecord.id, label: artistRecord.name }
			});

			this.setState({artistList: formatedData})
		})
	}

	addArtist(artistId){
		if (artistId) {
			fetchArtistById(artistId).done(artistRecord => {
				this.setState({artistList:[artistRecord], selectedArtist: artistId})
			})
		} else {
			this.setState({selectedArtist: null})
		}

	}

	goToArtist(artistRecord) {
		if (artistRecord) {
			this.props.addArtistToFilter(artistRecord.value);
			this.addArtist(artistRecord.value)
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


// <form>
// 					<input
// 						placeholder="search by artist"
// 						onChange={this.searchForArtist} 
// 					></input>
// 				</form>
// 				<ul>
// 				{
// 					this.state.artistList.map((artistObject) => {
// 						return <li key={artistObject.id}>{artistObject.name}</li>
// 					})
// 				}
// 				</ul>