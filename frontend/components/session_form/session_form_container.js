import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, sigup } from '../../actions/session_actions'

const mapStateToProps = state => ({
	errors: session.errors
});

const mapDispatchToProps = dispatch => ({
	login: (user) => dispatch(login(user)),
	signup: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);