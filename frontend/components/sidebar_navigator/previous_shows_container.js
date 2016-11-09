import { connect } from 'react-redux'
import ShowsByDay from '../shows_by_day/shows_by_day'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'
import { updateDates } from '../../actions/filter_actions'


const mapStateToProps = (state, ownProps) => {
	// if the params are empty, create dates instead 
	let yesterday = new Date(+new Date - 8.64e+7);
	let fromDate, toDate;

	if (!ownProps.location.query.fromDate || Date.parse(ownProps.location.query.fromDate) > yesterday ) {
		toDate = yesterday.toISOString().substring(0, 10)
		fromDate = new Date(+new Date - 12096e5).toISOString().substring(0, 10)
	} else {
		fromDate = Math.min(Date.parse(ownProps.location.query.fromDate), yesterday)
		toDate = Math.min(Date.parse(ownProps.location.query.toDate), yesterday)
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
		fromDate: fromDate,
		maxDate: yesterday
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsByDay)