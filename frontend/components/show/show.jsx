import React from 'react';
import dateFormat from 'dateformat'
import ShowInformation from '../shows_by_day/show_information'


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
		this.props.fetchShowsByDate(fromDate, toDate)
		this.props.router.push(
			{ pathname: currentRouteName, 
				query: {fromDate: fromDate, toDate: toDate}
			});
	};

	_pathBack() {
		let query = this.props.router.location.query
		this.props.router.push(
			{	pathname: "/", query: query }
		)
	}

	_pathToVenue() {
		let query = this.props.router.location.query
		let venue = this.props.Show.venueId
		this.props.router.push(
			{	pathname: `/venue/${venue}`, query: query }
		)
	}

	render () {
		debugger
		if (!this.props.Show) {
			return <h1>loading</h1>
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
									 onClick={this.pathToVenue.bind(this)}>
								see venue {">"}
							</h3>
						</nav>
					<content className="side-bar-content">
						<section className="show-information-container side-bar-box">
							<div className="show-information">
								<ShowInformation show={this.props.Show}/>
							</div>
						</section>
						<h3 className="shows">Shows</h3>
						<section className="venue-information side-bar-box">
							<h4 className="venue-name">{this.props.Show.Venue.name}</h4>
							<span className="venue-address">
								{`${this.props.Show.Venue.address}, ${this.props.Show.Venue.city}, ${this.props.Show.Venue.state}`}
							</span>
						</section>
					</content>
				</aside>
			</div>
		)
	}
};

export default Show