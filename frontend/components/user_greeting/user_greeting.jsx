import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';

class SessionLinks extends React.Component {
	constructor() {
		super();
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = { open: false }
	}

	componentWillMount() {
    Modal.setAppElement('body');
 }

	openModal () { this.setState({open: true}); }

	closeModal () { this.setState({open: false}); }

	render () {
		//SessionFormContainer
		return (
			<nav className="login-signup">
    		<button className="current" onClick={this.openModal}>Login/Signup</button>
    		<Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
    			<SessionFormContainer />
    		</Modal>
  		</nav>
		)
	}
}

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.email}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const UserGreeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : <SessionLinks/>
);

export default UserGreeting;
