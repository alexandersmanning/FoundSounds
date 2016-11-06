import { connect } from 'react-redux'
import Show from './show'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		Show: state.Show,

		toDate: ownProps.location.query.toDate,
		fromDate: ownProps.location.query.fromDate
	})
}

//Come back here for bounds
const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (fromDate, toDate) => dispatch(fetchShowsByDate({"fromDate": fromDate, "toDate": toDate}))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)