import { connect } from 'react-redux'
import ShowsByDay from '../shows_by_day/shows_by_day'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'
import { updateDates, removeVenueFromFilter } from '../../actions/filter_actions'

import { getDefaultToDate,
	getDefaultFromDate,
	dateToString,
	getToDate
} from '../../util/date_util';


const mapStateToProps = (state, ownProps) => {
	let today = getDefaultFromDate();
	let fromDate = ownProps.location.query.fromDate;
	let toDate = ownProps.location.query.toDate;

	if (!fromDate || Date.parse(fromDate) < Date.parse(today) ) {
		fromDate = today;
	} 

	if (!toDate || Date.parse(toDate) < Date.parse(fromDate)){
		toDate = getToDate(fromDate); 
	} 

	return ({
		ShowsByDay: state.ShowsByDay,
		filter: state.filter,
		toDate: toDate,
		fromDate: fromDate,
		minDate: new Date()
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate)),
		removeVenueFromFilter: (venueId) => dispatch(removeVenueFromFilter(venueId))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsByDay)