export const FETCH_USER_SHOWS = "FETCH_USER_SHOWS";
export const RECEIVE_USER_SHOWS = "RECEIVE_USER_SHOWS";
export const RECEIVE_USER_SHOW = "RECEIVE_USER_SHOW";
export const ADD_USER_SHOW = "ADD_USER_SHOW";
export const UPDATE_USER_SHOW = "UPDATE_USER_SHOW";
export const DELETE_USER_SHOW = "DELETE_USER_SHOW";
export const REMOVE_USER_SHOW = "REMOVE_USER_SHOW";

export const fetchUserShows = (userId) => ({
	type: FETCH_USER_SHOWS,
	userId
});

export const receiveUserShows = (userShows) => {
	return ({
	type: RECEIVE_USER_SHOWS,
	userShows
})}

export const receiveUserShow = (userShow) => ({
	type: RECEIVE_USER_SHOW,
	userShow
})

export const addUserShow = (userId, showId, attending) => ({
	type: ADD_USER_SHOW,
	userId,
	showId,
	attending
})

export const updateUserShow = (userShowId, attending) => ({
	type: UPDATE_USER_SHOW,
	userShowId,
	attending
})

export const deleteUserShow = (userShowId) => ({
	type: DELETE_USER_SHOW,
	userShowId
})

export const removeUserShow = (userShow) => ({
	type: REMOVE_USER_SHOW,
	userShow
})

