import { connect } from 'react-redux'
import ShowsByDay from './shows_by_day'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'
import { updateDates, removeVenueFromFilter } from '../../actions/filter_actions'
import { addUserShow, updateUserShow, deleteUserShow } from '../../actions/user_shows_actions'

const mapStateToProps = (state, ownProps) => {
	let today = new Date();
	let fromDate, toDate;
	if (!ownProps.location.query.fromDate || Date.parse(ownProps.location.query.fromDate) < today ) {
		fromDate = today.toISOString().substring(0, 10)
		toDate = new Date(+new Date + 6048e5).toISOString().substring(0, 10)
	} else {
		fromDate = Date.parse(ownProps.location.query.fromDate)
		toDate = Date.parse(ownProps.location.query.toDate)
		if (!fromDate) {
			fromDate = new Date().toISOString().substring(0, 10)
		} else { fromDate = new Date(fromDate).toISOString().substring(0, 10) } 
	
		if (!toDate) {
			toDate = new Date().toISOString().substring(0, 10)
		} else { toDate = new Date(toDate).toISOString().substring(0, 10) } 
	}

	return ({
		ShowsByDay: state.ShowsByDay,
		filter: state.filter,
		toDate: toDate,
		fromDate: fromDate
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