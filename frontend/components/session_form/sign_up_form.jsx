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
		this.props.signup(this.state);
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
				<form onSubmit={this.handleSubmit} className="signup-form-box">
					{this.renderErrors()}
					<div className="signup-form">
						<br/>
						<label> Email:
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="signup-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="signup-input" />
						</label>
						<br/>
						<label> Password Confirmation:
							<input type="password"
								value={this.state.password_confirmation}
								onChange={this.update("password_confirmation")}
								className="signup-input" />
						</label>
						<br/>
						<input type="submit" value="Signup" />
					</div>
				</form>
			</div>
		);
	}
}

export default SignUpForm;