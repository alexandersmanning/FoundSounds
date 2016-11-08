import React from 'react';
import UserGreetingContainer from '../user_greeting/user_greeting_container';
import Modal from 'react-modal';

class UserShows extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: true }
	}


	_addUserShow (userId, showId, attendence_type) {
		this.props.addUserShow(userId, showId, attendence_type)
	}

	_deleteUserShow(userShowId) {
		this.props.deleteUserShow(userShowId)
	}

	_callLogIn() {
		this.setState({ open: true })
	}

	render() {
		let attending_show = this.props.UserShows[this.props.showId]
		let show_value
		let show_text 

		if (attending_show) {
			// find if they are attending or not, and set the text appropriately
			if (attending_show.attending === 2) {
					show_value = 1;
					show_text = "Just Interested"
			}
				else {
					show_value = 2;
					show_text = "Now Attending"
				}
			return( 
						<section className="attendence-button-group">
							<div 
								className="user-show-button"
								onClick={this._deleteUserShow.bind(this, attending_show["userShowsId"])}>
										<h3 className="absolute-show-button">Remove Show</h3>
								</div>
								<div 
									className="user-show-button"
									onClick={this._addUserShow.bind(this, this.props.session.currentUser.id, this.props.showId, show_value)}>
									<h3 className="absolute-show-button">{show_text}</h3>
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


