import {
				 UPDATE_BOUNDS,
				 UPDATE_DATES,
				 ADD_USER_TO_FILTER,
				 REMOVE_USER_FROM_FILTER,
				 ADD_VENUE_TO_FILTER,
				 REMOVE_VENUE_FROM_FILTER
				  } from '../actions/filter_actions';
import merge from 'lodash/merge';

const FilterReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState
	switch (action.type) {
		case UPDATE_BOUNDS:
			return merge({}, state, {bounds: action.bounds});
		case UPDATE_DATES:
			let dates = { "fromDate": action.fromDate, "toDate": action.toDate };
			return merge({}, state, dates );
		case ADD_USER_TO_FILTER:
			let userId = { "userId": action.userId };
			return merge({}, state, userId );
		case REMOVE_USER_FROM_FILTER:
			newState = merge({}, state, {});
			delete newState["userId"];
			return newState;
		case ADD_VENUE_TO_FILTER:
			let venueId = { "venueId": action.venueId };
			return merge({}, state, venueId);
		case REMOVE_VENUE_FROM_FILTER:
			newState = merge({}, state, {});
			delete newState["venueId"];
			return newState;
		default:
			return state;
	}
};


export default FilterReducer