import { connect } from 'react-redux';
import UserShows from './user_shows_component';
import { addUserShow, updateUserShow, deleteUserShow } from '../../actions/user_shows_actions';

const mapStateToProps = state => ({
		UserShows: state.UserShows,
		session: state.session,
		filter: state.filter
})

const mapDispatchToProps = dispatch => ({
	addUserShow: (userId, showId, attending) => dispatch(addUserShow(userId, showId, attending)),
	updateUserShow: (userShowId, attending) => dispatch(updateUserShow(userShowId, attending)),
	deleteUserShow: (userShowId) => dispatch(deleteUserShow(userShowId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShows)