import {
				 UPDATE_BOUNDS,
				 UPDATE_DATES,
				 ADD_USER_TO_FILTER,
				 REMOVE_USER_FROM_FILTER
				  } from '../actions/filter_actions';
import merge from 'lodash/merge';

const FilterReducer = (state = {}, action) => {
	Object.freeze(state)
	switch (action.type) {
		case UPDATE_BOUNDS:
			return merge({}, state, {bounds: action.bounds})
		case UPDATE_DATES:
			let dates = { "fromDate": action.fromDate, "toDate": action.toDate }
			return merge({}, state, dates )
		case ADD_USER_TO_FILTER:
			let userId = { "userId": action.userId }
			return merge({}, state, userId )
		case REMOVE_USER_FROM_FILTER:
			let newState = merge({}, state, {})
			delete newState["userId"]
			return newState
		default:
			return state;
	}
};


export default FilterReducer