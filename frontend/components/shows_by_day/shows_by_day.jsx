import React from 'react';
import ShowsComponent from './shows_component';
import DatePickerForm from './date_picker_form';
import SearchContainer from '../search/search_container';
import dateFormat from 'dateformat';


class ShowsByDay extends React.Component {
	constructor(props) {
		super(props)
  }

  _changePath(location) {
  	console.log(`you hit ${location}`)
  }

  componentDidMount() {
  	if (this.props.filter.venueId) {
  		this.props.removeVenueFromFilter(this.props.filter.venueId)
  	}
  }

	render () {
		this.ShowsByDay = this.props.ShowsByDay.ShowList.ShowsByDate
		let showDisplay;
		if (this.ShowsByDay) {
			showDisplay = Object.keys(this.ShowsByDay).map(date_value => 
										{
											return <li key={date_value} 
																className="show-by-day-group">
												<h4 className="show-date-list">{dateFormat(new Date(date_value +" 08:00:00"), "dddd, mmmm dS")}</h4>
												<ShowsComponent 
													shows={this.ShowsByDay[date_value].Shows} 
												/>
											</li>
										})
		} else {
			showDisplay = [
				<li className="no-shows">
					<h4>No shows to display</h4>
					<img className="no-shows-image" src="http://res.cloudinary.com/ddvdi1pie/image/upload/v1478539473/jumproping_mixtape_d92nid.gif" />
				</li>
			]
		}

		return (
			<div className="main-container">
				<aside className="side-bar-parent col-1-3">
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
				</aside>
			</div>
		)
	}
};

export default ShowsByDay;