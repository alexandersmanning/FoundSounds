import { connect } from 'react-redux'
import Show from './show'
import { fetchShowById } from '../../actions/show_actions'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		Show: state.Show,
		toDate: ownProps.location.query.toDate,
		fromDate: ownProps.location.query.fromDate
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (fromDate, toDate) => dispatch(fetchShowsByDate(fromDate, toDate)),
		fetchShowById: (id) => dispatch(fetchShowsById(id))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)