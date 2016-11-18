import { RECEIVE_SHOW, CLEAR_SHOW } from '../actions/show_actions'

const _nullShow = Object.freeze({})

const ShowReducer = (state = _nullShow, action) => {
	Object.freeze(state)
	switch(action.type) {
		case RECEIVE_SHOW:
			return action.show;
		case CLEAR_SHOW:
			return _nullShow;
		default:
			return state;
	}
};

export default ShowReducer;
