import React from 'react';
import { withRouter } from 'react-router';

class DatePickerForm extends React.Component{
	constructor(props) {
		//This will be sent a min and max date?
		super(props);
		this.state = {
			fromDate: this.props.fromDate,
			toDate: this.props.toDate
		}

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	componentDidMount() {
			if (!this.state.fromDate || !this.state.toDate) {
				this.setState({
					fromDate: new Date().toISOString().substring(0, 10),
					toDate: new Date(+new Date + 12096e5).toISOString().substring(0, 10)
				}, () => this._updatePath());
			} else { this._updatePath() }
	}

	handleSubmit(e) {
		e.preventDefault();
		this._updatePath();
	}

	_updatePath() {
		const currentRouteName = this.props.router.getCurrentLocation().pathname;
		this.props.fetchShowsByDate(this.state.fromDate, this.state.toDate)
		this.props.router.push({pathname: currentRouteName, query: this.state});
	};

	render() {
		return (
			<div className="date-form-container">
				<h3 className="date-form-title">Show Dates</h3>
				<form onSubmit={this.handleSubmit} className="date-form-box">
					<label for="date-from">From</label>
					<input type="date" id="date-from"
						value={this.state.fromDate}
						min={this.props.minDate}
						max={this.state.toDate}
						onChange={this.update("fromDate")}
					 />
					<label for="date-to">To</label>
					<input type="date" id="date-to"
						value={this.state.toDate}
						min={this.state.fromDate}
						max={this.props.maxDate}
						onChange={this.update("toDate")}
					 />

					 <input className="date-button" type="submit" value="set dates" />
				</form>
			</div>
		)
	}
}

export default withRouter(DatePickerForm);