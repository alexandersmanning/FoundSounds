import React from 'react'

class LogInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.login({user: this.state });
	}

	guestLogin(e) {
		let guest = {email: "guest@foundsounds.io", password: "guest_account" }
		this.props.login({user: guest } );
	}

	renderErrors(error, message) {
		if (message) {
			return `${message}`
		}
		return " "
	}

	render() {
		return (
			<div className="login-form-container">
				<h3 className="login-form-title">Log In</h3>
				<form onSubmit={this.handleSubmit} 
							className="login-form-box">
					<div className="login-form">
						<span className="errors">
								{this.renderErrors("login", this.props.errors.login)}
							</span>
						<label for="login-email" hidden> Email</label>
						<input className="login-text" id="login-email" type="text"
							value={this.state.email}
							onChange={this.update("email")}
							className="login-input"
							placeholder="email" />
						<span className="input-border"/>
						<label for="login-password" hidden>Password</label>
							<input className="login-text" type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" 
								placeholder="password"
							/>
						<span className="input-border"/>
						<br/>
						<div className="log-in-button-group">
							<input className="login-button" type="submit" value="log in" />
							<div className="guest-button" onClick={this.guestLogin}>guest login</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default LogInForm;