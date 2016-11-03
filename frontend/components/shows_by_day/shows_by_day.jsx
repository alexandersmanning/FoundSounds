import React from 'react'
import ShowsComponent from './shows_component'
import DatePickerForm from './date_picker_form'
import SearchContainer from '../search/search_container'

class ShowsByDay extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		
		this.ShowsByDay = this.props.ShowsByDay.ShowList.ShowsByDate
		let showDisplay;
		if (this.ShowsByDay) {
			showDisplay = Object.keys(this.ShowsByDay).map(key => 
										{
											return <li key={key} className="show-by-day-group">
												{key}
												<ShowsComponent shows={this.ShowsByDay[key].Shows}/>
											</li>
										})
		} else {
			showDisplay = [<li className="no-shows">No shows to display</li>]
		}

		return (
			<div className="main-container">
				<aside className="shows-by-day-parent col-1-3">
					<content className="show-by-day-content">
							<DatePickerForm 
								fromDate={this.props.fromDate}
								toDate={this.props.toDate}
								fetchShowsByDate={this.props.fetchShowsByDate}
							/>
							<ul className="date-list">
								{
									showDisplay
								}
							</ul>
						</content>
				</aside>
				<SearchContainer />
			</div>
		)
	}
};

export default ShowsByDay;