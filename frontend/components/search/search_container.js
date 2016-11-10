import { connect } from 'react-redux';
import Search from './search';
import { updateBounds } from '../../actions/filter_actions'

const mapStateToProps = state => {
	return ({
		ShowsByVenue: state.ShowsByDay,
		session: state.session,
		filter: state.filter
	})
};

const mapDispatchToProps = dispatch => ({
	updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)