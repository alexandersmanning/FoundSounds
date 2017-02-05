export const fetchShows = (filters, success, error) => {
	$.ajax({
		type: "GET",
		url: `api/shows`,
		data: filters,
		success,
		error
	});
}

export const fetchShowById = (id) => {
	return $.ajax({
		type: "GET",
		url: `api/shows/${id}`,
	});
}

export const fetchVenueById = (id, filters, success, error) => {
	$.ajax({
		type: "GET",
		url: `api/venues/${id}`,
		data: filters,
		success,
		error
	});
}