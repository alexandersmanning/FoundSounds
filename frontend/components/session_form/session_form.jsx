import React from 'react';
import LogInForm from './login_form'
import SignUpForm from './sign_up_form'

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.session || { email: "", password: "", password_confirmation: "" }
	}

	componentWillUpdate() {

	}

	render() {
		return (<div>
					<LoginForm props={this.props}/>
					<SignUpForm props={this.props}/>
				</div>)
	}


}

export default SessionForm;