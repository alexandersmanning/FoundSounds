import merge from 'lodash/merge'

export const fetchUserShows = (id, filters, success, error) => {
	$.ajax({
		type: "GET",
		url: "api/user_shows",
		data: merge({}, { userId: id }, filters)
	});
}

export const createUserShows = (userId, showId, attending, success, error) => {
	$.ajax({
		type: "POST",
		url: "api/user_shows",
		data: userId, showId, attending
	});
}

export const updateUserShows = (userShowId, attending, success, error) => {
	$.ajax({
		type: "PATCH",
		url: `api/user_shows/${userShowId}`,
		data: attending
	});
}