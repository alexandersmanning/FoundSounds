export const "FETCH_USER_SHOWS" = FETCH_USER_SHOWS;
export const "RECEIVE_USER_SHOWS" = RECEIVE_USER_SHOWS;
export const "ADD_USER_SHOW" = ADD_USER_SHOW;
export const "UPDATE_USER_SHOW" = UPDATE_USER_SHOW;

export const fetchUserShows = (userId, filter) => (
	type: FETCH_USER_SHOWS;
	userId,
	fromDate: filter["fromDate"],
	toDate: filter["toDate"],
	bounds: filter["bounds"]
);

export const receiveUserShow = (userShows) => (
	type: RECEIVE_USER_SHOWS;
	userShows
)

export const addUserShow = (userId, showId, attending) => (
	type: ADD_USER_SHOW,
	userId,
	showId,
	attending
)

