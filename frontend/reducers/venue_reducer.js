import { RECEIVE_VENUE, CLEAR_VENUE } from '../actions/venue_actions';
import merge from 'lodash/merge'

const _nullVenue = Object.freeze({})

const VenueReducer = (state = _nullVenue, action) => {
	switch(action.type) {
		case RECEIVE_VENUE:
			return action.venue;
		case CLEAR_VENUE:
			return _nullVenue;
		default: 
			return state;
	}
};

export default VenueReducer;