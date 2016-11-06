import { RECEIVE_VENUE } from '../actions/venue_actions';
import merge from 'lodash/merge'

const VenueReducer = (state = {}, action) => {
	switch(action.type) {
		case RECEIVE_VENUE:
			return action.venue
		default: 
			return state;
	}
};

export default VenueReducer;