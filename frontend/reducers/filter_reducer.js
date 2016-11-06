import { updateBounds, 
				 UPDATE_BOUNDS,
				 updateDates,
				 UPDATE_DATES
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
		default:
			return state;
	}
};


export default FilterReducer