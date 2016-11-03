import React from 'react'

//This will be made up of 4 functional components
// 1 form for date picker
// This will display each date 
// 2. Venue information
	// 3. Band information

class ShowsByDay extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount () {
		//if the props are empty give default dates
		let fromDate = this.props.fromDate;
		let toDate = this.props.toDate;

		if (!fromDate || !toDate) {
			fromDate = new Date()
			toDate = new Date(+new Date + 12096e5)
		}

		this.props.fetchShowsByDate(fromDate, toDate)
	}

	render () {
		debugger
		return (
			<aside className="shows-by-day-parent col-1-3">
				<ul className="date-list">
					<li>Hey</li>
					<li>Hello</li>
				</ul>
			</aside>
		)
	}
};

export default ShowsByDay;