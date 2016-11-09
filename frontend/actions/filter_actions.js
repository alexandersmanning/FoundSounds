export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_DATES = "UPDATE_DATES";
export const ADD_USER_TO_FILTER = "ADD_USER_TO_FILTER";
export const REMOVE_USER_FROM_FILTER = "REMOVE_USER_FROM_FILTER";

export const updateBounds = (bounds) => ({
	type: UPDATE_BOUNDS,
	bounds
});

export const updateDates = (fromDate, toDate) => ({
	type: UPDATE_DATES,
	fromDate,
	toDate
});


export const addUserToFilter = (userId) => ({
	type: ADD_USER_TO_FILTER,
	userId
});

export const removeUserFromFilter = () => ({
	type: REMOVE_USER_FROM_FILTER
});