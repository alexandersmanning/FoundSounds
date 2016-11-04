export const fetchShows = (fromDate, toDate, success, error) => {
	$.ajax({
		type: "GET",
		url: `api/shows?fromDate=${fromDate}&toDate=${toDate}`,
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