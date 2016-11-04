import React from "react";
import MarkerManager from '../../util/marker_manager';
import Modal from 'react-modal';
import DisplayShows from '../shows_by_day/display_shows'

class ConcertMap extends React.Component {
	constructor(props) {
		super(props)
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.leaveModal = this.leaveModal.bind(this);
		this.state = { open: false, venue: {} }
		this.handleClick = this._handleClickEvent.bind(this)
	}

	componentWillMount() {
    Modal.setAppElement('body');
 	}

	componentDidMount() {
		const mapDOMNode = this.refs.map;

		const mapOptions = {
			center: { lat: 37.7758, lng: -122.435}, //currently San Francisco
			zoom: 13,
			streetViewControl: false,
			mapTypeControl: false
		};
		this.map = new google.maps.Map(mapDOMNode, mapOptions);
		this.MarkerManager = new MarkerManager(this.map, this.handleClick)
		// debugger
		this.MarkerManager.updateMarkers(this.props.ShowsByVenue)
	}

	componentDidUpdate() {
		this.MarkerManager.updateMarkers(this.props.ShowsByVenue)	
	}

	_handleClickEvent(selectedVenue) {
		this.setState({open: true, venue: selectedVenue })
	}

	openModal () { this.setState({open: true}); }

	closeModal () { this.setState({open: false}); }

	leaveModal() {
 		//Leaving actions
 		this.closeModal()
  }

	render() {
		return(
			<div id='map-container' ref='map'>
				<Modal isOpen={this.state.open}
							 onRequestClose={this.leaveModal}>
					<DisplayShows venue={this.state.venue}/>
				</Modal>
			</div>
		)
	}
};

export default ConcertMap;