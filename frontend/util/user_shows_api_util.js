import merge from 'lodash/merge'

export const fetchUserShows = (id, filters, success, error) => {
	$.ajax({
		type: "GET",
		url: "api/user_shows",
		data: merge({}, { userId: id }, filters),
		success,
		error
	});
}

export const createUserShows = (userId, showId, attending, success, error) => {
	$.ajax({
		type: "POST",
		url: "api/user_shows",
		data: { 
			user_shows: {
						user_id: userId, 
						show_id: showId, 
						attending: attending
					} 
				},
		success,
		error
	});
}

export const updateUserShows = (userShowId, attending, success, error) => {
	$.ajax({
		type: "PATCH",
		url: `api/user_shows/${userShowId}`,
		data: { 
			user_shows: {
						attending: attending
					} 
				},
		success,
		error
	});
}

export const deleteUserShows = (userShowId, success, error) => {
	$.ajax({
		type: "DELETE",
		url: `api/user_shows/${userShowId}`,
		success,
		error
	});
}