import { connect } from 'react-redux'
import Venue from './venues'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions';
import { updateDates, addVenueToFilter } from '../../actions/filter_actions'

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		Venue: state.Venue,
		filter: state.filter,
		fromDate: ownProps.location.query.fromDate,
		toDate: ownProps.location.query.toDate
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (filter) => dispatch(fetchShowsByDate(filter)),
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate)),
		addVenueToFilter: (venueId) => dispatch(addVenueToFilter(venueId))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Venue)