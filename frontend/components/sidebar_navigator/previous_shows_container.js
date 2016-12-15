import { connect } from 'react-redux'
import ShowsByDay from '../shows_by_day/shows_by_day'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'
import { updateDates, removeVenueFromFilter } from '../../actions/filter_actions'

import { getDefaultToDate,
	getDefaultFromDate,
	dateToString,
	getToDate,
	getDefaultPreviousDate,
	getYesterday
} from '../../util/date_util';


const mapStateToProps = (state, ownProps) => {
	let yesterday = getYesterday();
	let fromDate = ownProps.location.query.fromDate;
	let toDate = ownProps.location.query.toDate;

	if  (!toDate || Date.parse(toDate) > Date.parse(yesterday) ) {
		toDate = yesterday	
	}

	if (!fromDate || Date.parse(toDate) < Date.parse(fromDate)){
		fromDate = getDefaultPreviousDate(fromDate); 
	}

	return ({
		ShowsByDay: state.ShowsByDay,
		filter: state.filter,
		toDate: toDate,
		fromDate: fromDate,
		maxDate: yesterday
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate)),
		removeVenueFromFilter: (venueId) => dispatch(removeVenueFromFilter(venueId))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsByDay)