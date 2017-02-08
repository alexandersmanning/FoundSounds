import * as actions from '../../actions/filter_actions';
import FilterReducer from '../../reducers/filter_reducer';


let expectedAction;
let fromDate = new Date(), toDate = new Date(+fromDate + 2000);
let bounds = {"NE": "NE", "SE":"SE"};


describe("Filter Reducer Update Bounds and Update Dates", () => {
	it("Updates the bounds", () => {
		bounds = "bounds"
		let action = {type: actions.UPDATE_BOUNDS, bounds: bounds };
		expect(FilterReducer({},action)).toEqual({bounds: bounds})
		expect(FilterReducer({"otherVar":1}, action)).toEqual({"otherVar":1, bounds: bounds});
	});

	it("updates the two dates", () => {
		let action = {type: actions.UPDATE_DATES, fromDate, toDate};
		expect(FilterReducer({bounds},action)).toEqual({bounds, fromDate, toDate})
	})
});

describe("add artist to filter part of reducer", () => {
	let state, action, expectedState;
	it("adds an artist to the filter if the filter does not contain one", () => {
		state = {"otherFilter":"value"};
		action = {type: actions.ADD_ARTIST_TO_FILTER, artistId: 1};
		expectedState = {"otherFilter":"value", "artistId": 1};

		expect(FilterReducer(state, action)).toEqual(expectedState)
	});

	it("adds an artist to the filter if the filter already has one", () => {
		state = {"otherFilter":"value", "artistId": 1};
		action = {type: actions.ADD_ARTIST_TO_FILTER, artistId: 2};
		expectedState = {"otherFilter":"value", "artistId": 2};

		expect(FilterReducer(state, action)).toEqual(expectedState)
	})
});

describe("remove artist from filter part of reducer", () => {
	let state, action, expectedState;
	it("removes artist/does not raise error from the filter if the filter does not contain one", () => {
		state = {"otherFilter":"value"};
		action = {type: actions.REMOVE_ARTIST_FROM_FILTER};
		expectedState = {"otherFilter":"value"};

		expect(FilterReducer(state, action)).toEqual(expectedState)
	});

	it("removes an artist from the filter if the filter has one", () => {
		state = {"otherFilter":"value", "artistId": 1};
		action = {type: actions.REMOVE_ARTIST_FROM_FILTER };
		expectedState = {"otherFilter":"value"};

		expect(FilterReducer(state, action)).toEqual(expectedState)
	})
})