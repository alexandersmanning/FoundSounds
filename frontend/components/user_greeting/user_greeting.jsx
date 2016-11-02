import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';

class SessionLinks extends React.Component {
	constructor(props) {
		super(props);
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
	 	let nav;

		if (this.props.currentUser) {
		 	nav = (
		 		<nav className="login-signup">
			 		 <h2 className="header-name">{this.props.currentUser.email}</h2>
			   	 <button className="header-button" 
			   	 				 onClick={this.props.logout}>Log Out</button>
			   </nav>
		 	)
		} else {
			nav = (
				<nav className="login-signup">
					<button className="sign-up-button" 
									onClick={this.openModal}>Login/Signup</button>
	    		<Modal isOpen={this.state.open} 
	    					 onRequestClose={this.closeModal}>
	    			<SessionFormContainer />
	    		</Modal>
    		</nav>
    		)
		}
		   
		//SessionFormContainer
		return (
    	nav
		)
	}
}

const UserGreeting = ({ currentUser, logout }) => (
	<SessionLinks currentUser={currentUser} logout={logout}/>
	// currentUser ? personalGreeting(currentUser, logout) : <SessionLinks/>
);

export default UserGreeting;
