import React from 'react';
import UserGreetingContainer from '../user_greeting/user_greeting_container';

class UserShows extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: true }
	}


	_addUserShow (userId, showId, attendence_type) {
		this.props.addUserShow(userId, showId, attendence_type)
	}

	_updateUserShow (userShowId, attendence_type) {
		this.props.updateUserShow(userShowId, attendence_type)
	}

	_deleteUserShow(userShowId) {
		this.props.deleteUserShow(userShowId)
	}

	_callLogIn() {
		this.setState({ open: true })
	}

	render() {
		let attending_show = this.props.UserShows[this.props.showId]
		let attending_class = ""
		let interested_class = ""
		let attending_action, interested_action

		if (attending_show) {
			if (attending_show.attending === 2) {
					attending_class = "selected-button"
					attending_action = this._deleteUserShow.bind(this, attending_show["userShowsId"])
					interested_action = this._updateUserShow.bind(this, attending_show["userShowsId"],  1)
			}
				else {
					interested_class = "selected-button";
					interested_action = this._deleteUserShow.bind(this, attending_show["userShowsId"])
					attending_action = this._updateUserShow.bind(this, attending_show["userShowsId"], 2)
				}
			return( 
						<section className="attendence-button-group">
							<div 
								className={"user-show-button " + attending_class}
								onClick={attending_action}>
										<h3 className="absolute-show-button">Attending</h3>
								</div>
								<div 
									className={"user-show-button " + interested_class}
									onClick={interested_action}>
									<h3 className="absolute-show-button">Interested</h3>
								</div>
							</section>
							)
		} else if (this.props.session.currentUser) {
			return (
				<section className="attendence-button-group">
					<div 
					className="user-show-button"
					onClick={this._addUserShow.bind(this, this.props.session.currentUser.id, this.props.showId, 2)}>
						<h3 className="absolute-show-button">Attending</h3>
					</div>
					<div 
					className="user-show-button"
					onClick={this._addUserShow.bind(this, this.props.session.currentUser.id, this.props.showId, 1)}>
						<h3 className="absolute-show-button">Interested</h3>
					</div>
				</section>
				)
		} else {
				return (<section className="attendence-button-group">
									<div 
									className="user-show-button">
										<h3 className="absolute-show-button">Attending</h3>
										<div className="hidden-login-button">
											<UserGreetingContainer />
										</div>
									</div>
									<div 
									className="user-show-button">
										<h3 className="absolute-show-button">Interested</h3>
										<div className="hidden-login-button">
											<UserGreetingContainer />
										</div>
									</div>
								</section>)
		}
	}
}

export default UserShows;


