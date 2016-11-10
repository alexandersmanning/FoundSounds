import React from 'react';
import { withRouter } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';

class SessionLinks extends React.Component {
	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.logoutModal = this.logoutModal.bind(this);
		this.leaveModal = this.leaveModal.bind(this);
		this.state = { open: this.props.open || false }
	}

	componentWillMount() {
    Modal.setAppElement('body');
 }

 logoutModal() {
 	this.props.logout();
 	this.props.router.replace({pathname: "/"})
 	this.openModal()
 };

 leaveModal() {
 		this.props.receiveErrors({errors: {}})
 		this.closeModal()
 }

	openModal () { this.setState({open: true}); }

	closeModal () { this.setState({open: false}); }

	render () {
	 	let nav;

		if (this.props.currentUser) {
		 	nav = (
		 		<nav className="login-signup">
			 		 <h2 className="header-name">{this.props.currentUser.email}</h2>
			   	 <button className="header-button" 
			   	 				 onClick={this.logoutModal}>Log Out</button>
			   </nav>
		 	)
		} else {
			nav = (
				<nav className="login-signup">
					<button className="sign-up-button" 
									onClick={this.openModal}>Login/Signup</button>
	    		<Modal isOpen={this.state.open} 
	    					 onRequestClose={this.leaveModal}>
	    			<SessionFormContainer />
	    		</Modal>
    		</nav>
    		)
		}

		return (
    	nav
		)
	}
}

const UserGreeting = ({ currentUser, logout, receiveErrors, open, router }) => (
	<SessionLinks 
		currentUser={currentUser} 
		logout={logout} 
		receiveErrors={receiveErrors}
		open={open}
		router={router}
		/>
);

export default withRouter(UserGreeting);
