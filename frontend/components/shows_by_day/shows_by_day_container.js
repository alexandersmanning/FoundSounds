import { connect } from 'react-redux'
import ShowsByDay from './shows_by_day'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'
import { updateDates, removeVenueFromFilter } from '../../actions/filter_actions'
import { addUserShow, updateUserShow, deleteUserShow } from '../../actions/user_shows_actions'

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		filter: state.filter,
		toDate: ownProps.location.query.toDate,
		fromDate: ownProps.location.query.fromDate
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (filter) => dispatch(fetchShowsByDate(filter)),
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate)),
		removeVenueFromFilter: (venueId) => dispatch(removeVenueFromFilter(venueId))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsByDay)