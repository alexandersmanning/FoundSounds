import React from 'react';
import ReactDOM from 'react-dom'
import ShowsComponent from './shows_component';
import DatePickerForm from './date_picker_form';
import ArtistSearch from '../artist_search/artist_search'
import SearchContainer from '../search/search_container';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Headroom from 'react-headroom';
import { isEqual } from 'lodash';
import { displayDate } from '../../util/date_util';

class ShowsByDay extends React.Component {
	constructor(props) {
		super(props);
		this._getMoreDates = this._getMoreDates.bind(this);
		this._getShowTitle = this._getShowTitle.bind(this);
		this._getHeadComponent = this._getHeadComponent.bind(this);
		this._getInfiniteScrollParent = this._getInfiniteScrollParent.bind(this);

		let header = [this._getHeadComponent(), this._getShowTitle()]
		this.state = { loaded: header , hasMore: true, height: window.innerHeight - 15 };
  }

  componentDidMount() {
  	if (this.props.filter.venueId) {
  		this.props.removeVenueFromFilter(this.props.filter.venueId)
  	}
  }

  componentWillReceiveProps(nextProps) {
  	if (!isEqual(this.props.ShowsByDay.ShowList.ShowsByDate, nextProps.ShowsByDay.ShowList.ShowsByDate)) {
  		let header = [this._getHeadComponent(), this._getShowTitle()]
	  	setTimeout(() => {
	  		this.setState({loaded: header, hasMore: true })
	  	}, 500)
  	}
  }

  _getMoreDates() {
  	let dateList = Object.keys(this.ShowsByDay);
  	let loadLength = this.state.loaded.length - 2;
  	let newItems = [];
  	let hasMore = true;
  	let dateKey = [];
  	let countShows = 0;

  	if (loadLength  < dateList.length) {
	  	while (countShows < 5 && (loadLength < dateList.length)) {
	  		dateKey.push(dateList[loadLength])
	  		countShows += this.ShowsByDay[dateKey[dateKey.length - 1]]["Shows"].length
	  		loadLength += 1;
	  	}

 			dateKey.forEach( dateValue => {
 				newItems.push(this._createShow(dateValue))
 			});
  	}
  	else { 
  		hasMore = false;
  	}

  	let newLoaded = this.state.loaded.concat(newItems)
  	setTimeout(() => {
  		this.setState({loaded: newLoaded, hasMore: hasMore})
  	}, 500);
  }

  _createShow(dateValue) {
  	let new_date = displayDate(dateValue)
  	return (
  		<li key={dateValue} 
				className="show-by-day-group">
				<h4 className="show-date-list">{new_date}</h4>
					<ShowsComponent 
						shows={this.ShowsByDay[dateValue].Shows} 
						date={dateValue}
						selectMarker={this.props.selectMarker}
						deselectMarker={this.props.deselectMarker}
						/>
			</li>
		)
  }

  _getShowTitle() {
  		return (
  			<div key={"title"} className="show-title-box">
					<h3 className="shows-title">Shows</h3>
				</div>
			)
  }

  _getInfiniteScrollParent() {
  	return document.getElementsByClassName("infinite-scroll-component")[0] || window
  }

  _getHeadComponent() {
  		return (
  			<Headroom
		  		parent={this._getInfiniteScrollParent}
		  		disableInlineStyles={true}
		  		key="headroom"
		  		>
				<section className="date-picker-form-section">
					<DatePickerForm 
						fromDate={this.props.fromDate}
						toDate={this.props.toDate}
						maxDate={this.props.maxDate}
						minDate={this.props.minDate}
						fetchShowsByDate={this.props.fetchShowsByDate}
						updateDates={this.props.updateDates}
					/>
				</section>
				<section>
					<ArtistSearch />
				</section>
			</Headroom> )
  }


	render () {
		this.ShowsByDay = this.props.ShowsByDay.ShowList.ShowsByDate
		let showDisplay;
		if (this.ShowsByDay) {
				if (this.state.loaded.length <= 2) { this._getMoreDates() }
				showDisplay = <InfiniteScroll
					next={this._getMoreDates}
   				hasMore={this.state.hasMore}
    			loader={<div className="cssload-container">
						<div className="cssload-double-torus"></div>
						</div>}
    			height={this.state.height}
    			>
    			{this.state.loaded}</InfiniteScroll>
		} else {
			showDisplay = this.state.loaded.concat([
				<li key="noshow" className="no-shows">
					<h4>No shows to display</h4>
					<img className="no-shows-image" src="http://res.cloudinary.com/ddvdi1pie/image/upload/v1478539473/jumproping_mixtape_d92nid.gif" />
				</li>
			])
		}

		return (
			<ReactCSSTransitionGroup
		     	transitionName="example"
		      transitionAppear={true}
		      transitionAppearTimeout={1000}
		      transitionEnter={false}
		      transitionLeave={false}>
				<div className="main">
					<content className="side-bar-content main-display">
						<section className="shows-by-day-list">
							<ul className="date-list">
								{
									showDisplay
								}
							</ul>
						</section>
					</content>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
};

export default ShowsByDay;
