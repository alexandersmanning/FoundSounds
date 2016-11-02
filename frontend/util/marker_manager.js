export default class MarkerManager {
	constructor(map, handleClick) {
		this.map = map;
		this.markers = [];
		this.handleClick = handleClick;
		// this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
	}

	_concertsToAdd() {
		let currentConcerts = this.markers.map( marker => marker.concertsId)
		debugger
		return this.concerts.filter( concerts => !currentConcerts.includes(concerts.id))
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

	updateMarkers(concerts) {
		this.concerts = this._concertsToArray(concerts)
		let concertsToCreate = this._concertsToAdd()
		concertsToCreate.forEach( concert => this._createMarkerFromConcert(concert) )
	}

	_concertsToArray(concerts) {
		return Object.keys(concerts).map(key => concerts[key])
	}
}
