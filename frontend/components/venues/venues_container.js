import { connect } from 'react-redux'
import Venue from './venues'
import { fetchShowsByDate } from '../../actions/shows_by_day_actions'

const mapStateToProps = (state, ownProps) => {

	return ({
		ShowsByDay: state.ShowsByDay,
		Venue: state.ShowsByDay.ShowList.ShowsByVenue[ownProps.params.venueId],
		toDate: ownProps.location.query.toDate,
		fromDate: ownProps.location.query.fromDate
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (fromDate, toDate) => dispatch(fetchShowsByDate(fromDate, toDate))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Venue)