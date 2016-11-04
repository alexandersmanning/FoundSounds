import React from 'react';
import ShowsComponent from './shows_component';
import DatePickerForm from './date_picker_form';
import SearchContainer from '../search/search_container';
import dateFormat from 'dateformat';


class ShowsByDay extends React.Component {
	constructor(props) {
		super(props)
  }


	render () {
		
		this.ShowsByDay = this.props.ShowsByDay.ShowList.ShowsByDate
		let showDisplay;
		if (this.ShowsByDay) {
			showDisplay = Object.keys(this.ShowsByDay).map(date_value => 
										{
											return <li key={date_value} 
																className="show-by-day-group side-bar-box">
												<h4 className="show-date">{dateFormat(date_value, "dddd, mmmm dS")}</h4>
												<ShowsComponent shows={this.ShowsByDay[date_value].Shows}/>
											</li>
										})
		} else {
			showDisplay = [<li className="no-shows">No shows to display</li>]
		}

		return (
			<div className="main-container">
				<aside className="side-bar-parent col-1-3">
					<content className="side-bar-content">
						<section className="date-picker-form-section">
							<DatePickerForm 
								fromDate={this.props.fromDate}
								toDate={this.props.toDate}
								fetchShowsByDate={this.props.fetchShowsByDate}
							/>
						</section>
						<section className="shows-by-day-list">
							<h3 className="show-title">Shows</h3>
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