import React from 'react';
import ReactDOM from 'react-dom'
import ShowsComponent from './shows_component';
import DatePickerForm from './date_picker_form';
import SearchContainer from '../search/search_container';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ShowsByDay extends React.Component {
	constructor(props) {
		super(props)
		this.state = { loaded: [], hasMore: true, height: 800}
		this._getMoreDates = this._getMoreDates.bind(this)
  }

  componentDidMount() {
  	if (this.props.filter.venueId) {
  		this.props.removeVenueFromFilter(this.props.filter.venueId)
  	}

  	this.setState({height: window.innerHeight - 305 })
  }

  componentWillReceiveProps() {
  	this.setState({loaded: [], hasMore: true })
  }

  _getMoreDates() {
  	let dateList = Object.keys(this.ShowsByDay);
  	let loadLength = this.state.loaded.length;
  	let newItems = [];
  	let hasMore = true;
  	if (loadLength < dateList.length) {
 			dateList.forEach( (dateValue, idx) => {
 				if (idx < loadLength + 1) {
 					newItems.push(this._createShow(dateValue, idx))
 				}
 			});
  	}
  	else { 
  		newItems = this.state.loaded;
  		hasMore = false;
  	}

  	setTimeout(() => {
  		this.setState({loaded: newItems, hasMore: hasMore})
  	}, 500);
  }

  _createShow(dateValue, idx) {
  	let new_date = this._displayedDates(dateValue)

  	return (
  		<li key={idx} 
				className="show-by-day-group">
				<h4 className="show-date-list">{new_date}</h4>
					<ShowsComponent 
						shows={this.ShowsByDay[dateValue].Shows} 
						date={dateValue}/>
			</li>
		)
  }

  _displayedDates(date_value) {
  	return new Date(+new Date(date_value) + 2.88e+7).toLocaleDateString("US", {format: "weekday, month, day", weekday: "long", month: "long", day: "numeric" })
  }


	render () {
		this.ShowsByDay = this.props.ShowsByDay.ShowList.ShowsByDate
		let showDisplay;
		if (this.ShowsByDay) {
				if (this.state.loaded.length < 1) { this._getMoreDates() }
				showDisplay = <InfiniteScroll
					next={this._getMoreDates}
   				hasMore={this.state.hasMore}
    			loader={<h4>Loading...</h4>}
    			height={this.state.height}
    			scrollThreshold={0.1}
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
						<section className="shows-by-day-list">
							<h3 className="shows">Shows</h3>
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