import React from 'react';
import dateFormat from 'dateformat'
import ArtistInformation from '../shows_by_day/artist_information'
import ShowInformation from '../shows_by_day/show_information'


class Venue extends React.Component {
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

	render () {

		if (!this.props.Venue) {
			return <h1>loading</h1>
		}
		return (
			<div className="main-container">
				<aside className="side-bar-parent col-1-3">
						<nav className="venue-nav">
							<h3 className="back-button"
									 onClick={this._pathBack.bind(this)}>
								{"<"} back to list
							</h3>
						</nav>
					<content className="side-bar-content">
						<section className="venue-information side-bar-box">
							<h4 className="venue-name">{this.props.Venue.name}</h4>
							<span className="venue-address">
								{`${this.props.Venue.address}, ${this.props.Venue.city}, ${this.props.Venue.state}`}
							</span>
						</section>
							<h3 className="shows">Shows</h3>
						<section className="show-information-container link-side-bar-box">
							<ul className="show-information">
								{
									Object.keys(this.props.Venue.Shows).map(key => (
										<ShowInformation 
											show={this.props.Venue.Shows[key]}
											/>
									))
								}
							</ul>
						</section>
					</content>
				</aside>
			</div>
		)
	}
};

export default Venue