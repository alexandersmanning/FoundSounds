import * as actions from '../actions/filter_actions';
import merge from 'lodash/merge';

const FilterReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState
	switch (action.type) {
		case actions.UPDATE_BOUNDS:
			return merge({}, state, {bounds: action.bounds});
		case actions.UPDATE_DATES:
			let dates = { "fromDate": action.fromDate, "toDate": action.toDate };
			return merge({}, state, dates );
		case actions.ADD_USER_TO_FILTER:
			let userId = { "userId": action.userId };
			return merge({}, state, userId );
		case actions.REMOVE_USER_FROM_FILTER:
			newState = merge({}, state, {});
			delete newState["userId"];
			return newState;
		case actions.ADD_VENUE_TO_FILTER:
			let venueId = { "venueId": action.venueId };
			return merge({}, state, venueId);
		case actions.REMOVE_VENUE_FROM_FILTER:
			newState = merge({}, state, {});
			delete newState["venueId"];
			return newState;
		case actions.ADD_ARTIST_TO_FILTER:
			let artistEntry = { "artistId": action.artistId };
			return merge({}, state, artistEntry);
		case actions.REMOVE_ARTIST_FROM_FILTER:
			newState = merge({}, state, {});
			delete newState["artistId"];
			return newState;
		default:
			return state;
	}
};


export default FilterReducer