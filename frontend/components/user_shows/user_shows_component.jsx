import React from 'react';

class UserShows extends React.Component {
	constructor(props) {
		super(props);
		// this._addUserShow = this._addUserShow.bind(this);
		// this._deleteUserShow = this._deleteUserShow.bind(this);
	}


	_addUserShow (userId, showId) {
		this.props.addUserShow(userId, showId, 2)
	}

	_deleteUserShow(userShowId) {
		this.props.deleteUserShow(userShowId)
	}

	render() {
		if (this.props.UserShows[this.props.showId]) {
			return <div 
					className="user-show-button"
					onClick={this._deleteUserShow.bind(this, this.props.UserShows[this.props.showId]["userShowsId"])}>
							remove show
					</div>
		} else {
			return <div 
						className="user-show-button"
						onClick={this._addUserShow.bind(this, this.props.session.currentUser.id, this.props.showId)}>
							add show
						</div>
		};
	}
}

export default UserShows;


