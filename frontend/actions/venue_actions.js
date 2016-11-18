export const RECEIVE_VENUE = "RECEIVE_VENUE";
export const FETCH_VENUE_BY_ID = "FETCH_VENUE_BY_ID";
export const CLEAR_VENUE = "CLEAR_VENUE";

export const receiveVenue = (venue) => ({
	type: RECEIVE_VENUE,
	venue
});

export const fetchVenueById = (id, filter) => ({
	type: FETCH_VENUE_BY_ID,
	id,
	filter
});


export const clearVenue = () => ({
	type: CLEAR_VENUE
})
