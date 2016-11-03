import React from 'react'
import ShowsComponent from './shows_component'
import DatePickerForm from './date_picker_form'


class ShowsByDay extends React.Component {
	constructor(props) {
		super(props)
	}

	// componentDidMount () {
	// 	this._getShows()
	// }

	// _getShows() {
	// 	this.fromDate = this.props.fromDate;
	// 	this.toDate = this.props.toDate;

	// 	if (!this.fromDate || !this.toDate) {
	// 		this.fromDate = new Date()
	// 		this.toDate = new Date(+new Date + 12096e5)
	// 	}

	// 	this.props.fetchShowsByDate(this.fromDate, this.toDate)
	// }

	render () {
		// if (Object.keys(this.props.ShowsByDay).length === 0){
		// 	return <h1>Loading</h1>
		// }
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
		)
	}
};

export default ShowsByDay;