import { connect } from 'react-redux'
import Show from './show'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'
import { updateDates } from '../../actions/filter_actions'

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		Show: state.Show,
		filter: state.filter,
		toDate: ownProps.location.query.toDate,
		fromDate: ownProps.location.query.fromDate
	})
}

//Come back here for bounds
const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (fromDate, toDate) => dispatch(fetchShowsByDate({"fromDate": fromDate, "toDate": toDate})),
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)