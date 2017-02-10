import * as actions from '../actions/filter_actions';
import merge from 'lodash/merge';

const FilterReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState
	switch (action.type) {
		case actions.UPDATE_BOUNDS:
			return addToStore(state, action, ["bounds"])
		case actions.UPDATE_DATES:
			return addToStore(state, action, ["fromDate", "toDate"])
		case actions.ADD_USER_TO_FILTER:
			return addToStore(state, action, ["userId"])
		case actions.REMOVE_USER_FROM_FILTER:
			return removeFromStore(state, action, ["userId"]);
		case actions.ADD_VENUE_TO_FILTER:
			return addToStore(state, action, ["venueId"])
		case actions.REMOVE_VENUE_FROM_FILTER:
			return removeFromStore(state, action, ["venueId"]);
		case actions.ADD_ARTIST_TO_FILTER:
			return addToStore(state, action, ["artistId"])
		case actions.REMOVE_ARTIST_FROM_FILTER:
			return removeFromStore(state, action, ["artistId"]);
		default:
			return state;
	}
};

const addToStore = (state, action, actionVariables = []) => {
	//this adds new set of variables to an object and merges with the current state as a way of updating the state without changing the variable directly
	let newStateVariable = {};
	actionVariables.forEach(el => newStateVariable[el] = action[el])
	return merge({}, state, newStateVariable);
}

const removeFromStore = (state, action, actionVariables = []) => {
	//This creates a copy of the state, remove the specified variables from the copy, and then returns the copy, as a way of not changing the current state, and providing a new one
	let newState = merge({}, state, {});
	actionVariables.forEach(el => delete newState[el]);
	return newState;
}


export default FilterReducer