import { 
	RECEIVE_USER_SHOWS, 
	RECEIVE_USER_SHOW,
	REMOVE_USER_SHOW
} from '../actions/user_shows_actions'
import merge from 'lodash/merge'

const UserShowsReducer = (state = {}, action) => {
	Object.freeze(state)
	switch(action.type) {
		case RECEIVE_USER_SHOWS:
			return action.userShows;
		case RECEIVE_USER_SHOW:
			return merge({}, state, action.userShow)
		case REMOVE_USER_SHOW:
			let newState =  merge({}, state, {});
			delete newState[action.userShow.id];
			return newState;
		default: 
			return state;
	}
};

export default UserShowsReducer;
