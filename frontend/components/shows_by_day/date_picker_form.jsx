import React from 'react';
import { withRouter } from 'react-router';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';
// require('react-datepicker/dist/react-datepicker.css');

class DatePickerForm extends React.Component{
	constructor(props) {
		//This will be sent a min and max date?
		super(props);
		this.state = {
			fromDate: this.props.fromDate,
			toDate: this.props.toDate
		}
		this.handleChange = this.handleChange.bind(this)
	}


	componentDidMount() {
			if (!this.state.fromDate || !this.state.toDate) {
				this.setState({
					fromDate: new Date().toISOString().substring(0, 10),
					toDate: new Date(+new Date + 12096e5).toISOString().substring(0, 10)
				}, () => this._updatePath());
			} else { this._updatePath() }
	}

	handleChange(field) {
		return date => this.setState({
			[field]: date.toISOString().slice(0,10)
		}, this._updatePath)
	}

	_updatePath() {
		const currentRouteName = this.props.router.getCurrentLocation().pathname;
		this.props.updateDates(this.state.fromDate, this.state.toDate)
		this.props.router.push({pathname: currentRouteName, query: this.state});
	};

	render() {
	  this.maxDate = (this.props.maxDate || new Date(+new Date + 3.154e+10)).toISOString().substring(0, 10)

		this.minDate = (this.props.minDate || new Date(+new Date - 6.307e+11)).toISOString().substring(0, 10)

		return (
			<div className="date-form-container">
				<h3 className="shows">Show Dates</h3>
				<form onSubmit={this.handleSubmit} 
					className="date-form-box">					
					<div className="date-input-container">
						<label htmlFor="date-from">From</label>
						<DatePicker 
							selected={moment(this.state.fromDate)} 
							selectsStart  startDate={moment(this.state.fromDate)}
							endDate={moment(this.state.toDate)}
							onChange={this.handleChange("fromDate")} 
							id="date-from"
							className="date-picker"
							placeholderText="date from"
							maxDate={moment(this.state.toDate)}
							minDate={moment(this.minDate)}
							/>
							<span className="input-date-border"/>
						</div>
						<div className="date-input-container">
						<label htmlFor="date-to">To</label>
							<DatePicker 
							selected={moment(this.state.toDate)} 
							selectsEnd startDate={moment(this.state.fromDate)}
							endDate={moment(this.state.toDate)}
							onChange={this.handleChange("toDate")} 
							id="date-from"
							className="date-picker"
							placeholderText="date to"
							minDate={moment(this.state.fromDate)}
							maxDate={moment(this.maxDate)}
							/>
							<span className="input-date-border"/>
						</div>
				</form>
			</div>
		)
	}
}

export default withRouter(DatePickerForm);