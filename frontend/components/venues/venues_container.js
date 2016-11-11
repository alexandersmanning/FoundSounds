import { connect } from 'react-redux'
import Venue from './venues'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions';
import { updateDates, addVenueToFilter } from '../../actions/filter_actions'

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		Venue: state.Venue,
		filter: state.filter,
		//the below probably isn't needed
		toDate: ownProps.location.query.toDate,
		fromDate: ownProps.location.query.fromDate
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