import { connect } from 'react-redux'
import ShowsByDay from './shows_by_day'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		toDate: ownProps.params.to_date,
		fromDate: ownProps.params.from_date
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (fromDate, toDate) => dispatch(fetchShowsByDate(fromDate, toDate))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsByDay)