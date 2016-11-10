import React from 'react';
import dateFormat from 'dateformat'
import ShowInformation from '../shows_by_day/show_information'
import { withRouter } from 'react-router'
import UserShowsContainer from '../user_shows/user_shows_container'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Show extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let fromDate = this.props.fromDate;
		let toDate = this.props.toDate;

		if (!fromDate || !toDate) {
			fromDate = new Date().toISOString().substring(0, 10);
			toDate = new Date(+new Date + 12096e5).toISOString().substring(0, 10);
		}

		this._updatePath(fromDate, toDate)
	}

	_updatePath(fromDate, toDate) {
		const currentRouteName = this.props.router.getCurrentLocation().pathname;
		this.props.updateDates(fromDate, toDate);
		this.props.router.push(
			{ pathname: currentRouteName, 
				query: {fromDate: fromDate, toDate: toDate}
			});
	};

	_pathBack() {
		let modifiedPath = this._findModifiedPath();
		let query = this.props.router.location.query
		this.props.router.push(
			{	pathname: modifiedPath, query: query }
		)
	}

	_pathToVenue() {
		let query = this.props.router.location.query
		let venue = this.props.Show.venueId
		let modifiedPath = this._findModifiedPath();
		this.props.router.push(
			{	pathname: `${modifiedPath}/venues/${venue}`, query: query }
		)
	}

	_findModifiedPath() {
		const currentRouteName = this.props.router.getCurrentLocation().pathname;
		const showString = `/shows/${this.props.router.params.showId}`
		return currentRouteName.slice(0, currentRouteName.length - showString.length)
	}

	render () {
		if (Object.keys(this.props.Show).length === 0) {
			return <h1>loading</h1>
		}

		let showAttending = <div hidden></div>
		if (this.props.Show.date.substring(0,10) >= new Date().toISOString().substring(0, 10)) {
			showAttending = <UserShowsContainer showId={this.props.Show.showId} />
		}

		return (
			<div className="main-container">
				<aside className="side-bar-parent col-1-3">
						<nav className="show-nav">
							<h3 className="back-button"
									 onClick={this._pathBack.bind(this)}>
								{"<"} back to list
							</h3>
							<h3 className="venue-button"
									 onClick	={this._pathToVenue.bind(this)}>
								view the venue {">"}
							</h3>
						</nav>
					<content className="side-bar-content">
						<section className="show-information-container">
							<ul className="show-information">
								<span>
        				{
									<ShowInformation show={this.props.Show} 
										className="side-bar-box"/>
        				}
        				</span>
							</ul>
							{showAttending}
						</section>
						<h3 className="shows">Venue</h3>
						<ul className="venue-link">
							<h4 className="venue-name">{this.props.Show.venueName}</h4>
							<li className="venue-address">
								{`${this.props.Show.venueAddress}, ${this.props.Show.venueCity}, ${this.props.Show.venueState}`}
							</li>
						</ul>
					</content>
				</aside>
			</div>
		)
	}
};

export default withRouter(Show)