import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => {
	return ({
		ShowsByVenue: state.ShowsByDay
	})
};

const mapDispatchToProps = dispatch => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)