import {connect} from 'react-redux';
import ArtistSearch from './artist_search';
import { 
	addArtistToFilter, 
	removeArtistFromFilter } from '../../actions/filter_actions'; 

//The filter is used to see if there is a current artist already in the filter
const mapStateToProps = state =>( {
	filter: state.filter
})


//The below two actions are used to add and remove the artist from the filter, which then updates the show data in the middleware
const mapDispatchToProps = dispatch => ({
	addArtistToFilter: (artistId) => dispatch(addArtistToFilter(artistId)),
	removeArtistFromFilter: () => dispatch(removeArtistFromFilter())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSearch);