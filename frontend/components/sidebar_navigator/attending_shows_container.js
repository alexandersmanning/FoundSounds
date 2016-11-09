import { connect } from 'react-redux'
import ShowsByDay from '../shows_by_day/shows_by_day'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'
import { updateDates } from '../../actions/filter_actions'
// import { updateUserShow, deleteUserShow } from '../../actions/user_shows_actions'

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		filter: state.filter,
		toDate: ownProps.location.query.toDate,
		fromDate: ownProps.location.query.fromDate,
		minDate: new Date()
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsByDay)