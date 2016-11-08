import { connect } from 'react-redux';
import { receiveErrors, logout } from '../../actions/session_actions';
import UserGreeting from './user_greeting';

const mapStateToProps = ({ session }, ownParams) => {
 	return ({
  	currentUser: session.currentUser,
	})
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGreeting);