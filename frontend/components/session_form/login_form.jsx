import React from 'react'

class LogInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
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
		this.props.login({user: this.state });
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
			<div className="login-form-container">
				<h3 className="login-form-title">Log In</h3>
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{this.renderErrors()}
					<div className="login-form">
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
						<input className="login-button" type="submit" value="log in" />
					</div>
				</form>
			</div>
		);
	}
}

export default LogInForm;