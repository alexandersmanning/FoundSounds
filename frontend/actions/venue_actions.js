export const RECEIVE_VENUE = "RECEIVE_VENUE";
export const FETCH_VENUE_BY_ID = "FETCH_VENUE_BY_ID";

export const receiveVenue = (venue) => ({
	type: RECEIVE_VENUE,
	venue
});

export const fetchVenueById = id => ({
	type: FETCH_VENUE_BY_ID,
	id
});

