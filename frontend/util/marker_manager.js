export default class MarkerManager {
	constructor(map, handleClick) {
		this.map = map;
		this.markers = [];
		this.handleClick = handleClick;
		this._createMarkerFromVenue = this._createMarkerFromVenue.bind(this)
		this._removeMarker = this._removeMarker.bind(this)
		this._markersToRemove = this._markersToRemove.bind(this)
		// this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
	}

	_venuesToAdd() {
		let currentVenues = this.markers.map( marker => marker.venueId)
		return this.venues.filter( venues => !currentVenues.includes(venues.id))
	}

	_markersToRemove() {
		let currentVenues = this.venues.map( venues => venues.id)
		return this.markers.filter(marker => !currentVenues.includes(marker.venueId))
	}

	_createMarkerFromVenue(venue) {
		const pos = new google.maps.LatLng(venue.lat, venue.lng)
		const marker = new google.maps.Marker({
			position: pos,
			map: this.map,
			venueId: venue.id
		});

		marker.addListener('click', () => this.handleClick(venue));
		this.markers.push(marker)
	}

	_removeMarker(marker) {
		const idx = this.markers.indexOf( marker );
		this.markers[idx].setMap(null);
		this.markers.splice(idx, 1);
	}

	updateMarkers(venues) {
		this.venues = this._venuesToArray(venues.ShowList.ShowsByVenue)
		let venuesToCreate = this._venuesToAdd ()
		venuesToCreate.forEach( venue => this._createMarkerFromVenue(venue) )

		let venuesToRemove = this._markersToRemove ()
		venuesToRemove.forEach(venue => this._removeMarker(venue))
	}

	_venuesToArray(venues) {
		if (!venues) { return [] }
		return Object.keys(venues).map(key => venues[key])
	}
}
