import React from 'react';
import { withRouter } from 'react-router';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { getDefaultToDate, 
	getDefaultFromDate, 
	getMaxDate, 
	getMinDate } from '../../util/date_util';

class DatePickerForm extends React.Component{
	constructor(props) {
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
				fromDate: getDefaultFromDate(),
				toDate: getDefaultToDate()
			}, () => this._updatePath());
		} 
		else
			{ 
				this._updatePath() // only want to do this if show_list is empty
			}
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
	  this.maxDate = (this.props.maxDate || getMaxDate())

		this.minDate = (this.props.minDate || getMinDate())

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