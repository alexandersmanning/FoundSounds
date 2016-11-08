import {
	FETCH_USER_SHOWS,
	ADD_USER_SHOW,
	UPDATE_USER_SHOW,
	DELETE_USER_SHOW,
	receiveUserShows,
	receiveUserShow,
	removeUserShow
} from '../actions/user_shows_actions'

import {
	fetchUserShows,
	createUserShows,
	updateUserShows,
	deleteUserShows
} from '../util/user_shows_api_util'


export default ({getState, dispatch}) => next => action => {
	const fetchUserShowsSuccess = userShows => dispatch(receiveUserShows(userShows));

	const AddUpdateSuccess = userShow => dispatch(receiveUserShow(userShow));
	const removeSuccess = userShow => dispatch(removeUserShow(userShow));

	switch(action.type) {
		case FETCH_USER_SHOWS:
			fetchUserShows(action.userId, getState().filter, fetchUserShowsSuccess, (error) => console.log(error))
			return next(action);
		case ADD_USER_SHOW:
			createUserShows(action.userId, action.showId, action.attending, AddUpdateSuccess);
			return next(action);
		case UPDATE_USER_SHOW:
			updateUserShows(action.userShowId, action.attending, AddUpdateSuccess)
			return next(action);
		case DELETE_USER_SHOW:
			deleteUserShows(action.userShowId, removeSuccess)
			return next(action);
		default: 
			return next(action)
	};
}