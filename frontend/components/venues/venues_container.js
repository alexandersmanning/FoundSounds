import { connect } from 'react-redux'
import Venue from './venues'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions';
import { fetchVenueById, clearVenue } from '../../actions/venue_actions';
import { updateDates, addVenueToFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		Venue: state.Venue,
		filter: state.filter
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (filter) => dispatch(fetchShowsByDate(filter)),
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate)),
		addVenueToFilter: (venueId) => dispatch(addVenueToFilter(venueId)),
		fetchVenueById: (venueId, filter) => dispatch(updateDates(venueId, filter))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Venue)