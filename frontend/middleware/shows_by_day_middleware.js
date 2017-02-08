import { receiveShowsByDate,
	FETCH_SHOWS_BY_DATE, 
	fetchShowsByDate } from '../actions/shows_by_day_actions';
import { fetchUserShows } from '../actions/user_shows_actions';
import { 
	UPDATE_BOUNDS, 
	UPDATE_DATES, 
	ADD_ARTIST_TO_FILTER, 
	REMOVE_ARTIST_FROM_FILTER } from '../actions/filter_actions';

import { fetchShows } from '../util/shows_by_day_api_util';


export default({getState, dispatch}) => next => action => {
	const successCallback = ShowsByDay => dispatch(receiveShowsByDate(ShowsByDay));
	let currentUser =  getState().session.currentUser 

	switch(action.type){
		case FETCH_SHOWS_BY_DATE:
			return fetchShows(getState().filter).done(successCallback);			
		case UPDATE_BOUNDS:
			next(action);
			//get all shows within the bound and date range
			dispatch(fetchShowsByDate());
			break;
		case UPDATE_DATES:
			//update the filters with the new dates
			next(action);
			//If there is a logged in user, pull their shows to add to the state. This state is used for individual shows to mark if the user is going or not
			if (currentUser){ dispatch(fetchUserShows(currentUser.id)) }
			//Get all shows within the bound and date range
			dispatch(fetchShowsByDate());
			break;
		case ADD_ARTIST_TO_FILTER:
			next(action);
			dispatch(fetchShowsByDate());
			break;
		case REMOVE_ARTIST_FROM_FILTER:
			next(action);
			dispatch(fetchShowsByDate());
			break;
		default: 
			return next(action);
	}
};