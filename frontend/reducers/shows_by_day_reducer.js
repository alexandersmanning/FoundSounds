import { RECEIVE_SHOWS_BY_DATE, REMOVE_SHOWS_BY_DAY} from '../actions/shows_by_day_actions'

const _nullShowList = Object.freeze({
	ShowList: {
		ShowsByDate: {},
		ShowsByVenue: {}
	}
})

const ShowsByDayReducer = (state = _nullShowList, action) => {	
	Object.freeze(state)
	switch(action.type) {
		case RECEIVE_SHOWS_BY_DATE:
			return action.ShowsByDay;
		case REMOVE_SHOWS_BY_DAY:
			return {ShowList: { ShowsByDate: {}, ShowsByVenue: state.ShowList.ShowsByVenue }}
		default:
			return state;
	}
};

export default ShowsByDayReducer;
