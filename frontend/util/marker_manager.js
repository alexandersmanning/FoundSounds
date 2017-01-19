const standardMarker = "http://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,w_32/v1478829204/pin_vbzdws.png";
const highlightedMarker = "http://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,w_48/v1478829204/pin_vbzdws.png"
const selectedMarker = "http://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,w_48/v1478829204/placeholder_mop7j1.png"

export default class MarkerManager {
	constructor(map, handleClick) {
		this.map = map;
		this.markers = [];
		this.handleClick = handleClick;
		this._createMarkerFromVenue = this._createMarkerFromVenue.bind(this)
		this._removeMarker = this._removeMarker.bind(this)
		this._markersToRemove = this._markersToRemove.bind(this)
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
			venueId: venue.id,
			icon: standardMarker
		});

		const windowHTML = "<div class='map-window'>" +
			`<h1 class='map-window-title'>${venue.name}</h1>` +
			`<p class='map-window-address'>${venue.address}</p>` +
			"</div>";

		marker['mapWindow'] = new google.maps.InfoWindow({
			content: windowHTML,
			maxWidth: 300,
		});

		marker.addListener('click', () => this.handleClick(venue));

		marker.addListener('mouseover', function() {
				if (this.getIcon() !== selectedMarker)
				{		
					this['mapWindow'].open(this.map, marker)
					this.setIcon(highlightedMarker);
				}
			})
		marker.addListener('mouseout', function() {
				this['mapWindow'].close(this.map, marker);
				if (this.getIcon() !== selectedMarker)
				{		
					this.setIcon(standardMarker);
				}
		})

		this.markers.push(marker)
	}

	_removeMarker(marker) {
		const idx = this.markers.indexOf( marker );
		this.markers[idx].setMap(null);
		this.markers.splice(idx, 1);
	}

	updateMarkers(venues, currentVenue, hoveredMarker) {
		this.venues = this._venuesToArray(venues.ShowList.ShowsByVenue)
		let venuesToCreate = this._venuesToAdd ()
		venuesToCreate.forEach( venue => this._createMarkerFromVenue(venue) )

		let venuesToRemove = this._markersToRemove ()
		venuesToRemove.forEach(venue => this._removeMarker(venue))

			this.markers.forEach( marker => {
				if (marker.venueId === currentVenue) {
					marker.setIcon(selectedMarker)
				}
				else if (marker.venueId === hoveredMarker){
					marker['mapWindow'].open(this.map, marker)
					marker.setIcon(highlightedMarker)
				}
				else {
					marker['mapWindow'].close(this.map, marker)
					marker.setIcon(standardMarker)
				}
			})
	}

	_venuesToArray(venues) {
		if (!venues) { return [] }
		return Object.keys(venues).map(key => venues[key])
	}
}
