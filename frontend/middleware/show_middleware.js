import { receiveShow, FETCH_SHOW_BY_ID } from '../actions/show_actions'
import { fetchShowById } from '../util/shows_by_day_api_util';

export default ({getState, dispatch}) => next => action => {
	const successCallback = Show => dispatch(receiveShow(Show));
	let deferred = $.Deferred();

	switch(action.type){
		case FETCH_SHOW_BY_ID:
			return fetchShowById(action.id).done(successCallback)
		default: 
			return next(action);
	}
};