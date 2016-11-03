import { connect } from 'react-redux';
import { receiveErrors, logout } from '../../actions/session_actions';
import UserGreeting from './user_greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGreeting);