import React from "react";
import MarkerManager from '../../util/marker_manager';
import Modal from 'react-modal';
import DisplayShows from '../shows_by_day/display_shows'
import { withRouter } from 'react-router'

class ConcertMap extends React.Component {
	constructor(props) {
		super(props)
		this.state = { open: false, venue: {} }
		this.handleClick = this._handleClickEvent.bind(this)
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
		this.MarkerManager.updateMarkers(this.props.ShowsByVenue)

		//handling bounds
		
		google.maps.event.addListener(this.map, 'idle', () => {
				let bounds = this.map.getBounds();
				let ne = { "lat": bounds.getNorthEast().lat(), "lng": bounds.getNorthEast().lng() }
				let sw = { "lat": bounds.getSouthWest().lat(), "lng": bounds.getSouthWest().lng() }
				// let dates = this.props.router.location.query
				this.props.updateBounds({
								"northEast": ne, 
								"southWest": sw, 
							})
		})
	}

	componentDidUpdate() {
		this.MarkerManager.updateMarkers(this.props.ShowsByVenue)	
	}

	_handleClickEvent(selectedVenue) {
		let newRoute = `venues/${selectedVenue.id}`;
		let currentRouteName = this._findModifiedPath();
		let query = this.props.router.location.query;
		this.props.router.push({pathname: `${currentRouteName}${newRoute}`, query: query})
	}

	_findModifiedPath() {
	

		// this code is repeated in multiple places and must go in a util
		let currentRouteName = this.props.router.getCurrentLocation().pathname;
		let endIdx = currentRouteName.indexOf("venue")
		if (endIdx === -1)
		{
			endIdx = currentRouteName.indexOf("show")
		}
		if (endIdx !== -1)
		 {
			currentRouteName = currentRouteName.slice(0, endIdx)
			} else if (currentRouteName !== "/") {
				currentRouteName += '/'
			}
		return currentRouteName
	}

	render() {
		return(
			<div id='map-container' ref='map'>
			</div>
		)
	}
};

export default withRouter(ConcertMap);