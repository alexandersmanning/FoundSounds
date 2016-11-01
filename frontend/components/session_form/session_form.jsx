import React from 'react';
import LogInForm from './login_form'
import SignUpForm from './sign_up_form'

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div className="session-form">
					<LogInForm errors={this.props.errors} login={this.props.login}/>
					<SignUpForm errors={this.props.errors} signup={this.props.signup}/>
				</div>)
	}


}

export default SessionForm;