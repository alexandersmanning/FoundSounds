import { FETCH_VENUE_BY_ID, receiveVenue } from '../actions/venue_actions'
import { fetchVenueById } from '../util/shows_by_day_api_util'

export default ({getState, dispatch}) => (next) => (action) => {
	const successCallback = venue => dispatch(receiveVenue(venue));
	switch(action.type) {
		case FETCH_VENUE_BY_ID:
			fetchVenueById(action.id, getState().filter, successCallback);
			return next(action);
		default: 
			return next(action);
	}
};