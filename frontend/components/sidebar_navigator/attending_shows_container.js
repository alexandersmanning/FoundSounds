import { connect } from 'react-redux'
import ShowsByDay from '../shows_by_day/shows_by_day'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'
import { updateDates } from '../../actions/filter_actions'
// import { updateUserShow, deleteUserShow } from '../../actions/user_shows_actions'

const mapStateToProps = (state, ownProps) => {
	let today = new Date();
	let fromDate, toDate;

	if (!ownProps.location.query.fromDate || Date.parse(ownProps.location.query.fromDate) < today ) {
		fromDate = today.toISOString().substring(0, 10)
		toDate = new Date(+new Date + 12096e5).toISOString().substring(0, 10)
	} else {
		fromDate = Math.min(Date.parse(ownProps.location.query.fromDate), today)
		toDate = Math.min(Date.parse(ownProps.location.query.toDate), today)
		if (!fromDate) {
			fromDate = new Date().toISOString().substring(0, 10)
		} else { fromDate = new Date(fromDate).toISOString().substring(0, 10) } 
	
		if (!toDate) {
			toDate = new Date().toISOString().substring(0, 10)
		} else { toDate = new Date(toDate).toISOString().substring(0, 10) } 
	}

	// let fromDate = Math.max(Date.parse(ownProps.location.query.fromDate), new Date())
	// let toDate = Math.max(Date.parse(ownProps.location.query.toDate), new Date())
	// if (!fromDate) {
	// 	fromDate = new Date().toISOString().substring(0, 10)
	// } else { fromDate = new Date(fromDate).toISOString().substring(0, 10) } 

	// if (!toDate) {
	// 	toDate = new Date().toISOString().substring(0, 10)
	// } else { toDate = new Date(toDate).toISOString().substring(0, 10) } 

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
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsByDay)