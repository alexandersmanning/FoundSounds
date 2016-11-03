import { RECEIVE_SHOWS_BY_DATE } from '../actions/shows_by_day_actions'

const _nullShowList = Object.freeze({})

const ShowsByDayReducer = (state = _nullShowList, action) => {
	Object.freeze(state)
	switch(action.type) {
		case RECEIVE_SHOWS_BY_DATE:
			return action.ShowsByDay;
		default:
			return state;
	}
};

export default ShowsByDayReducer;
