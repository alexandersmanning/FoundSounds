import { receiveShowsByDate,
	FETCH_SHOWS_BY_DATE, 
	fetchShowsByDate } from '../actions/shows_by_day_actions';
import { UPDATE_BOUNDS, UPDATE_DATES } from '../actions/filter_actions';
import { fetchShows } from '../util/shows_by_day_api_util';
import merge from 'lodash/merge';

export default({getState, dispatch}) => next => action => {
	const successCallback = ShowsByDay => dispatch(receiveShowsByDate(ShowsByDay));
	switch(action.type){
		case FETCH_SHOWS_BY_DATE:
			fetchShows(getState().filter, successCallback)
			return next(action);
		case UPDATE_BOUNDS:
			next(action);
			//I dont thing the getState porition is needed given the store
			dispatch(fetchShowsByDate(getState().filter));
			break;
		case UPDATE_DATES:
			next(action);
			//I dont thing the getState porition is needed given the store
			dispatch(fetchShowsByDate(getState().filter));
			break;
		default: 
			return next(action);
	}
};