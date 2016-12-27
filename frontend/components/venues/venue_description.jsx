import React from 'react';

const PUNCTUATION_LIST = [".",",","!","?","'","{","}","(",")","[","]"];

class VenueDescription extends React.Component {
	constructor(props){
		super(props);
		this.state = { displaySecondary: false };

		this.trimText = this.trimText.bind(this);
		this.checkMatch = this.checkMatch.bind(this);
		this.punctuationMatch = this.punctuationMatch.bind(this);
		this.spaceMatch = this.spaceMatch.bind(this);
	}

	componentDidMount() {
		let args = [
			this.props.text, 
			this.props.min,
			this.props.ideal, 
			this.props.max
		];

		let textBreakdown = this.trimText(...args);
		this.primaryText = textBreakdown[0];
		this.secondaryText = textBreakdown[1];
	}

	trimText(text, min, ideal, max) {
		debugger
		if (text.length < ideal) {
			return [text, ''];
		}

		let pointerOne = ideal;
		let pointerTwo = ideal;
		let firstSpace, resultIdx;

		const setSpace = (idx) => {
			if (this.spaceMatch(idx)) { firstSpace = firstSpace || idx }
		}

		while (pointerOne < max || pointerTwo > min) {
			if (this.checkMatch(pointerOne) && this.spaceMatch(pointerOne + 1)) {
				resultIdx = pointerOne + 1
				break;
			} else if (this.checkMatch(pointerTwo) && this.spaceMatch(pointerTwo + 1)) {
				resultIdx = pointerTwo + 1;
				break;
			} else {
				setSpace(pointerOne);
				setSpace(pointerTwo);
			}

			pointerOne++;
			pointerTwo--;
		}

		if (resultIdx === undefined) {
			if (firstSpace && firstSpace >= min && firstSpace <= max) { 
				resultIdx = firstSpace;
			} else if (ideal - min < max - ideal) {
				resultIdx = min;
			} else {
				resultIdx = max;
			}
		}

		return [text.slice(0, resultIdx), text.slice(resultIdx).trim()];
	}

	spaceMatch(idx) {
		if (this.props.text[idx] === " ") { return true }
	}

	punctuationMatch(idx) {
		let punctuationIdx = PUNCTUATION_LIST.indexOf(this.props.text[idx]);
		if ( punctuationIdx >= 0 && this.spaceMatch(idx + 1)) 
		{
			return true;
		}
	}

	checkMatch(idx) {
		if (idx < this.props.max && idx > this.props.min && this.punctuationMatch(idx)) {
			return true;
		}
	}

	setStatus() {
		let display = !this.state.displaySecondary;
		this.setState({displaySecondary: display});
	}

	render() {
		let displayText;

		if (!this.secondaryText) {
			displayText = (
			<div className="display-text-group">
				<span className="displayed-text">
					{`${this.primaryText} ${this.secondaryText}`}
				</span>
			</div>);
		}
		else if (this.state.displaySecondary) {
			displayText = (
			<div className="display-text-group">
				<span className="displayed-text">
					{`${this.primaryText} ${this.secondaryText}`}
				<div className="read-more-button" 
						 onClick={this.setStatus.bind(this)}>read less</div> 
				</span>
			</div>);
		} else {
			displayText = (<div className="display-text-group">
				<span className="displayed-text">
						{`${this.primaryText}`}
				<div className="read-more-button"
						 onClick={this.setStatus.bind(this)}>read more</div>
				</span>
			</div>);
		}


		return (	
			<content>
				{ displayText }
			</content>
			);
	}
}

export default VenueDescription;