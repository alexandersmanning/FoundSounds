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

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="signup-form-container">
				<h3 className="login-form-title">Sign Up</h3>
				<form onSubmit={this.handleSubmit} className="signup-form-box">
					<div className="login-form">
						<br/>
						<label for="signup-email" hidden>Email</label>
							<input type="text" id="signup-email"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input"
								placeholder="email" />
							<span className="input-border"/>
						<br/>
						<label for="signup-password" hidden>Password </label>
							<input type="password" id="signup-password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" 
								placeholder="password"
								/>
						<br/>
						<label for="signup-confirm" hidden>Confirm Password</label>
							<input type="password"
								value={this.state.password_confirmation}
								onChange={this.update("password_confirmation")}
								className="login-input" 
								placeholder="confirm password"
								/>
						<br/>
						<input className="login-button" type="submit" value="sign up" />
					</div>
				</form>
			</div>
		);
	}
}

export default SignUpForm;