import { receiveShowsByDate,
	FETCH_SHOWS_BY_DATE, 
	fetchShowsByDate } from '../actions/shows_by_day_actions';
import { fetchUserShows } from '../actions/user_shows_actions';
import { UPDATE_BOUNDS, UPDATE_DATES } from '../actions/filter_actions';
import { fetchShows } from '../util/shows_by_day_api_util';
import merge from 'lodash/merge';

export default({getState, dispatch}) => next => action => {
	const successCallback = ShowsByDay => dispatch(receiveShowsByDate(ShowsByDay));
	let currentUser =  getState().session.currentUser 

	switch(action.type){
		case FETCH_SHOWS_BY_DATE:
			fetchShows(getState().filter, successCallback)
			return next(action);
		case UPDATE_BOUNDS:
			next(action);
			dispatch(fetchShowsByDate(getState().filter));
			break;
		case UPDATE_DATES:
			next(action);
			if ( currentUser ){ dispatch(fetchUserShows(currentUser.id, getState().filter)) }
			dispatch(fetchShowsByDate(getState().filter));
			break;
		default: 
			return next(action);
	}
};