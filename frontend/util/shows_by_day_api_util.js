export const fetchShows = (filters, success, error) => {
	$.ajax({
		type: "GET",
		url: `api/shows`,
		data: filters,
		success,
		error
	});
}

export const fetchShowById = (id, success, error) => {
	$.ajax({
		type: "GET",
		url: `api/shows/${id}`,
		success,
		error
	});
}