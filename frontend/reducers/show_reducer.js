import { RECEIVE_SHOW } from '../actions/show_actions'

const _nullShowList = Object.freeze({})

const ShowReducer = (state = _nullShowList, action) => {
	Object.freeze(state)
	debugger
	switch(action.type) {
		case RECEIVE_SHOW:
			return action.show;
		default:
			return state;
	}
};

export default ShowReducer;
