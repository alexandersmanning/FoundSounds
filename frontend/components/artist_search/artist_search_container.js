import {connect} from 'react-redux';
import ArtistSearch from './artist_search';
import { 
	addArtistToFilter, 
	removeArtistFromFilter } from '../../actions/filter_actions'; 

const mapStateToProps = state =>( {
	filter: state.filter
})

const mapDispatchToProps = dispatch => ({
	addArtistToFilter: (artistId) => dispatch(addArtistToFilter(artistId)),
	removeArtistFromFilter: () => dispatch(removeArtistFromFilter())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSearch);