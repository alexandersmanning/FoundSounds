export const fetchShows = (date_from, date_to, success, error) => {
	$.ajax({
		type: "GET",
		url: `api/shows?date_from=${date_from}&date_to=${date_to}`,
		success,
		error
	});
}