import { connect } from 'react-redux'
import ShowsByDay from './shows_by_day'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		toDate: ownProps.location.query.toDate,
		fromDate: ownProps.location.query.fromDate
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (fromDate, toDate) => dispatch(fetchShowsByDate(fromDate, toDate))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsByDay)