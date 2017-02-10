export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_DATES = "UPDATE_DATES";
export const ADD_USER_TO_FILTER = "ADD_USER_TO_FILTER";
export const REMOVE_USER_FROM_FILTER = "REMOVE_USER_FROM_FILTER";
export const ADD_VENUE_TO_FILTER = "ADD_VENUE_TO_FILTER";
export const REMOVE_VENUE_FROM_FILTER = "REMOVE_VENUE_FROM_FILTER";;
export const ADD_ARTIST_TO_FILTER = "ADD_ARTIST_TO_FILTER";
export const REMOVE_ARTIST_FROM_FILTER = "REMOVE_ARTIST_FROM_FILTER";

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

export const addVenueToFilter = (venueId) => ({
	type: ADD_VENUE_TO_FILTER,
	venueId
});

export const removeVenueFromFilter = (venueId) => ({
	type: REMOVE_VENUE_FROM_FILTER,
	venueId
});

export const addArtistToFilter = (artistId, artistName) => ({
	type: ADD_ARTIST_TO_FILTER,
	artistId,
	artistName
});

export const removeArtistFromFilter = () => ({
	type: REMOVE_ARTIST_FROM_FILTER
})