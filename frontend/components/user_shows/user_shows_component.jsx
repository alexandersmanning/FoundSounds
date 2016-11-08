import React from 'react';

class UserShows extends React.Component {
	constructor(props) {
		super(props);
	}


	_addUserShow (userId, showId, attendence_type) {
		this.props.addUserShow(userId, showId, attendence_type)
	}

	_deleteUserShow(userShowId) {
		this.props.deleteUserShow(userShowId)
	}

	render() {
		if (this.props.UserShows[this.props.showId]) {
			return( 
						<section className="attendence-button-group">
							<div 
								className="user-show-button"
								onClick={this._deleteUserShow.bind(this, this.props.UserShows[this.props.showId]["userShowsId"])}>
										remove show
								</div>
							</section>
							)
		} else if (this.props.session.currentUser) {
			return (
				<section className="attendence-button-group">
					<div 
					className="user-show-button"
					onClick={this._addUserShow.bind(this, this.props.session.currentUser.id, this.props.showId, 2)}>
						Attending
					</div>
					<div 
					className="user-show-button"
					onClick={this._addUserShow.bind(this, this.props.session.currentUser.id, this.props.showId, 1)}>
						Interested
					</div>
				</section>
				)
		} else {
				return (<section className="attendence-button-group">
									<h3>Please log in</h3>
								</section>)
		}
	}
}

export default UserShows;


