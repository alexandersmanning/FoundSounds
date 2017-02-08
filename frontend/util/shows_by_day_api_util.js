export const fetchShows = (filters) => {
	return $.ajax({
		type: "GET",
		url: `api/shows`,
		data: filters
	});
}

export const fetchShowById = (id) => {
	return $.ajax({
		type: "GET",
		url: `api/shows/${id}`,
	});
}

export const fetchVenueById = (id, filters) => {
	return $.ajax({
		type: "GET",
		url: `api/venues/${id}`,
		data: filters
	});
}

export const fetchArtistsByName = (name) => {
	return $.ajax({
		type: "GET",
		url: "api/artists",
		data: {artistName: name}
	});
}

export const fetchArtistById = (id) => {
	return $.ajax({
		type: "GET",
		url: `api/artists/${id}`
	});
}