import React from "react"
import MarkerManager from '../../util/marker_manager'

class ConcertMap extends React.Component {
	constructor(props) {
		super(props)
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
		this.MarkerManager = new MarkerManager(this.map)
		// debugger
		// this.MarkerManager.updateMarkers(this.props.ShowsByVenue)
	}

	// componentWillReceiveProps() {

	// 	this.MarkerManager.updateMarkers(this.props.ShowsByVenue)	
	// }

	componentDidUpdate() {
		this.MarkerManager.updateMarkers(this.props.ShowsByVenue)	
	}

	render() {
		return(
			<div id='map-container' ref='map'>
			</div>
		)
	}
};

export default ConcertMap;