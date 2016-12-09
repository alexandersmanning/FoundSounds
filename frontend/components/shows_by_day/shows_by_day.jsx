import React from 'react';
import ReactDOM from 'react-dom'
import ShowsComponent from './shows_component';
import DatePickerForm from './date_picker_form';
import SearchContainer from '../search/search_container';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Headroom from 'react-headroom'
import { isEqual } from 'lodash'

class ShowsByDay extends React.Component {
	constructor(props) {
		super(props);
		this._getMoreDates = this._getMoreDates.bind(this);
		this._getShowTitle = this._getShowTitle.bind(this);
		this.state = { loaded: [this._getShowTitle()], hasMore: true, height: 800};
  }

  componentDidMount() {
  	if (this.props.filter.venueId) {
  		this.props.removeVenueFromFilter(this.props.filter.venueId)
  	}

  	this.setState({height: window.innerHeight - 270 })
  }

  componentWillReceiveProps(nextProps) {
  	if (!isEqual(this.props.ShowsByDay.ShowList.ShowsByDate, nextProps.ShowsByDay.ShowList.ShowsByDate)) {
  		let header = [this._getShowTitle()]
	  	setTimeout(() => {
	  		this.setState({loaded: header, hasMore: true })
	  	}, 500)
  	}
  }

  _getMoreDates() {
  	let dateList = Object.keys(this.ShowsByDay);
  	let loadLength = this.state.loaded.length;
  	let newItems = [];
  	let hasMore = true;

  	if (loadLength - 1 < dateList.length) {
 			let dateKey = [dateList[loadLength - 1]]
 			if (this.ShowsByDay[dateKey[0]]["Shows"].length < 5 
 				&& loadLength !== dateList.length) {
 				dateKey.push(dateList[loadLength])
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
  	let new_date = this._displayedDates(dateValue)

  	return (
  		<li key={dateValue} 
				className="show-by-day-group">
				<h4 className="show-date-list">{new_date}</h4>
					<ShowsComponent 
						shows={this.ShowsByDay[dateValue].Shows} 
						date={dateValue}/>
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

  _displayedDates(date_value) {
  	return new Date(+new Date(date_value) + 2.88e+7).toLocaleDateString("US", {format: "weekday, month, day", weekday: "long", month: "long", day: "numeric" })
  }


	render () {
		this.ShowsByDay = this.props.ShowsByDay.ShowList.ShowsByDate
		let showDisplay;
		if (this.ShowsByDay) {
				if (this.state.loaded.length < 2) { this._getMoreDates() }
				showDisplay = <InfiniteScroll
					next={this._getMoreDates}
   				hasMore={this.state.hasMore}
    			loader={<img className="no-shows-image" src="http://res.cloudinary.com/ddvdi1pie/image/upload/v1478539473/jumproping_mixtape_d92nid.gif" />}
    			height={this.state.height}
    			>
    			{this.state.loaded}</InfiniteScroll>
		} else {
			showDisplay = [
				<li key="noshow" className="no-shows">
					<h4>No shows to display</h4>
					<img className="no-shows-image" src="http://res.cloudinary.com/ddvdi1pie/image/upload/v1478539473/jumproping_mixtape_d92nid.gif" />
				</li>
			]
		}

		return (
			<ReactCSSTransitionGroup
		     	transitionName="example"
		      transitionAppear={true}
		      transitionAppearTimeout={1000}
		      transitionEnter={false}
		      transitionLeave={false}>
				<div className="main">
					<content className="side-bar-content">
						<Headroom>
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
						</Headroom>
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

// dateFormat(new Date(date_value +" 08:00:00"), "dddd, mmmm dS")

// showDisplay = Object.keys(this.ShowsByDay).map((date_value, idx) => 
// 					{
// 						let new_date = this._displayedDates(date_value);
// 						return <li key={idx} 
// 											className="show-by-day-group">
// 							<h4 className="show-date-list">{new_date}</h4>
// 							<ShowsComponent 
// 								shows={this.ShowsByDay[date_value].Shows} 
// 								date={date_value}
// 							/>
// 						</li>
// 					})