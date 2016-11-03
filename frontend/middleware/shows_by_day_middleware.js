import { receiveShowsByDate,
	FETCH_SHOWS_BY_DATE } from '../actions/shows_by_day_actions'
import { fetchShows } from '../util/shows_by_day_api_util'

export default({getState, dispatch}) => next => action => {
	const successCallback = ShowsByDay => dispatch(receiveShowsByDate(ShowsByDay));
	switch(action.type){
		case FETCH_SHOWS_BY_DATE:
			fetchShows(action.fromDate, action.toDate, successCallback)
			return next(action);
		default: 
			return next(action);
	}
};