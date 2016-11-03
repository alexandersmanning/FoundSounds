export default class MarkerManager {
	constructor(map, handleClick) {
		this.map = map;
		this.markers = [];
		this.handleClick = handleClick;
		this._createMarkerFromConcert = this._createMarkerFromConcert.bind(this)
		this._removeMarker = this._removeMarker.bind(this)
		this._markersToRemove = this._markersToRemove.bind(this)
		// this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
	}

	_concertsToAdd() {
		let currentConcerts = this.markers.map( marker => marker.concertId)
		return this.concerts.filter( concerts => !currentConcerts.includes(concerts.id))
	}

	_markersToRemove() {
		let currentConcerts = this.concerts.map( concerts => concerts.id)
		return this.markers.filter(marker => !currentConcerts.includes(marker.concertId))
	}

	_createMarkerFromConcert(concert) {
		const pos = new google.maps.LatLng(concert.lat, concert.lng)
		const marker = new google.maps.Marker({
			position: pos,
			map: this.map,
			concertId: concert.id
		});

		// marker.addListener('click', () => this.handleClick(bench));
		this.markers.push(marker)
	}

	_removeMarker(marker) {
		const idx = this.markers.indexOf( marker );
		this.markers[idx].setMap(null);
		this.markers.splice(idx, 1);
	}

	updateMarkers(concerts) {
		this.concerts = this._concertsToArray(concerts.ShowList.ShowsByVenue)
		let concertsToCreate = this._concertsToAdd ()
		concertsToCreate.forEach( concert => this._createMarkerFromConcert(concert) )

		let concertsToRemove = this._markersToRemove ()
		concertsToRemove.forEach(concert => this._removeMarker(concert))
	}

	_concertsToArray(concerts) {
		if (!concerts) { return [] }
		return Object.keys(concerts).map(key => concerts[key])
	}
}
