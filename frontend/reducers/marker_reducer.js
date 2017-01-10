import { SELECT_MARKER, DESELECT_MARKER } from '../actions/marker_actions'

export default (state = null, action) => {
	switch(action.type) {
		case SELECT_MARKER:
			return action.venueId
		case DESELECT_MARKER:
			return null;
		default:
			return state;
	}
}