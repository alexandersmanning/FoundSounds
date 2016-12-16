import React from 'react'

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "", password_confirmation: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.signup({user: this.state });
	}

	renderErrors(error, message) {
		if (message) {
			return `${error} ${message}`
		}
		return " "
	}

	render() {
		return (
			<div className="signup-form-container">
				<h3 className="login-form-title">Sign Up</h3>
				<form onSubmit={this.handleSubmit} className="signup-form-box">
					<div className="login-form">
						<label htmlFor="signup-email" hidden>Email</label>
							<input type="text" id="signup-email"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input"
								placeholder="email" />
							<span className="input-border"/>
							<span className="errors">
								{this.renderErrors("email", this.props.errors.email)}
							</span>
						<label htmlFor="signup-password" hidden>Password </label>
						
							<input type="password" id="signup-password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" 
								placeholder="password"
								/>
								<span className="input-border"/>
								<span className="errors">
									{this.renderErrors("password", this.props.errors.password)}
								</span>
						<label htmlFor="signup-confirm" hidden>Confirm Password</label>
							<input type="password"
								value={this.state.password_confirmation}
								onChange={this.update("password_confirmation")}
								className="login-input" 
								placeholder="confirm password"
								/>
								<span className="input-border"/>
								<span className="errors">
									{this.renderErrors("password confirmation", this.props.errors.password_confirmation)}
								</span>
						<br/>
						<input className="login-button" type="submit" value="sign up" />
					</div>
				</form>
			</div>
		);
	}
}

export default SignUpForm;