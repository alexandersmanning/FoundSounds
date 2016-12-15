import { connect } from 'react-redux';
import Show from './show';
import { fetchShowsByDate } from '../../actions/shows_by_day_actions';
import { updateDates, addVenueToFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
	return ({
		ShowsByDay: state.ShowsByDay,
		Show: state.Show,
		filter: state.filter,
		toDate: ownProps.location.query.toDate,
		fromDate: ownProps.location.query.fromDate
	})
}


const mapDispatchToProps = dispatch => {
	return ({
		fetchShowsByDate: (fromDate, toDate) => dispatch(fetchShowsByDate({"fromDate": fromDate, "toDate": toDate})),
		updateDates: (fromDate, toDate) => dispatch(updateDates(fromDate, toDate)),
		addVenueToFilter: (venueId) => dispatch(addVenueToFilter(venueId))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)