import * as actions from '../actions/marker_actions';
import markerReducer from '../reducers/marker_reducer';

describe('actions', () => {
	it('should create an action to select a marker', () => {
		const venueId = "3";
		const expectedAction = {
			type: actions.SELECT_MARKER,
			venueId
		}

		expect(actions.selectMarker("3")).toEqual(expectedAction);
	})	
});

describe('marker reducer', () => {
	it("should return the initial state", () => {
			expect(markerReducer(undefined, {})).toEqual(null)
	})

	it("should return the venue id", () => {
		expect(markerReducer(undefined, {
			type: actions.SELECT_MARKER, 
			venueId:"3"
		})).toEqual("3")
	})

	it("should clear out state when deselect", () => {
		expect(markerReducer(undefined, {
			type: actions.DESELECT_MARKER
		})).toEqual(null)
	})
});