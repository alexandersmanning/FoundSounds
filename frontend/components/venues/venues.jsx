import React from 'react';
import dateFormat from 'dateformat';
import ArtistInformation from '../shows_by_day/artist_information';
import ShowInformation from '../shows_by_day/show_information';
import ReadMoreReact from 'read-more-react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getDefaultToDate, getDefaultFromDate } from '../../util/date_util'


class Venue extends React.Component {
	constructor(props) {
		super(props);
		this._sortByDate = this._sortByDate.bind(this);
	}

	componentDidMount() {
		let fromDate = this.props.filter.fromDate;
		let toDate =  this.props.filter.toDate;

		if (!fromDate || !toDate) {
			fromDate = getDefaultFromDate();
			toDate = getDefaultToDate();
		}
		this._updatePath(fromDate, toDate)

		this.props.addVenueToFilter(this.props.Venue.id)
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.Venue.id && this.props.filter.venueId !== this.props.Venue.id) {
			this.props.addVenueToFilter(this.props.Venue.id)
		}
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

	_findModifiedPath() {
		const currentRouteName = this.props.router.getCurrentLocation().pathname;
		const showString = `/venues/${this.props.router.params.venueId}`
		return currentRouteName.slice(0, currentRouteName.length - showString.length)
	}

	_sortByDate() {
		let showList = this.props.Venue.Shows
		return Object.keys(showList).sort((a, b) => {
			return Date.parse(showList[a]["date"]) - Date.parse(showList[b]["date"]);
		})
	}

	render () {
		if (Object.keys(this.props.Venue).length === 0) {
			return <h1>loading</h1>
		}

		let showList = (<ul key="venue-show-list" className="show-information">		
					{	
						this._sortByDate().map(key => (
							<ShowInformation 
								key={key}
								show={this.props.Venue.Shows[key]}
								/>
						))
					}
				</ul>)

		return (
			<ReactCSSTransitionGroup
		     	transitionName="venue"
		      transitionAppear={true}
		      transitionAppearTimeout={500}
		      transitionEnter={false}
		      transitionLeaveTimeout={500}>
			<div className="scroll" key={`venue-${this.props.Venue.id}`}>
				<nav className="venue-nav">
					<h3 className="back-button"
						 onClick={this._pathBack.bind(this)}>
						{"<"} back to list
					</h3>
				</nav>
				<content className="side-bar-content">
					<section className="venue-information">
						<h4 className="venue-name">{this.props.Venue.name}</h4>
						<span className="venue-address">
							{`${this.props.Venue.address}, ${this.props.Venue.city}, ${this.props.Venue.state}`}
						</span>
						<ReadMoreReact
							min={80}
							ideal={100}
							max={200}
							text={this.props.Venue.description}/>
					</section>
						<h3 className="shows">Shows</h3>
					<section className="show-information-container link-side-bar-box">
						{ showList }
					</section>
				</content>
			</div>
			</ReactCSSTransitionGroup>
		)
	}
};

export default Venue