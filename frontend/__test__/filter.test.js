import * as actions from '../actions/filter_actions';
import FilterReducer from '../reducers/filter_reducer';
import ShowsByDayMiddleware from '../middleware/shows_by_day_middleware';
import { FETCH_SHOWS_BY_DATE } from '../actions/shows_by_day_actions';

if (process.env.NODE_ENV === 'test') {
	window.$ = require('jquery');
}

import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';


let expectedAction;
let fromDate = new Date(), toDate = new Date(+fromDate + 2000);
let bounds = {"NE": "NE", "SE":"SE"};

describe("Filter Actions", () => {
	it("Sends and action for updating the bounds", () => {
		expectedAction = {type: actions.UPDATE_BOUNDS, bounds}
		expect(actions.updateBounds(bounds)).toEqual(expectedAction)
	});

	it("sends and update dates action to the filter", () => {
		expectedAction = {type: actions.UPDATE_DATES, fromDate, toDate};

		expect(actions.updateDates(fromDate, toDate)).toEqual(expectedAction);
	});
});

describe("Filter Reducer", () => {
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
})

describe("Shows by day middleware", () => {
	let next, store, action, url;
	let server;
	let mockStore = configureMockStore();

	beforeEach(() => {
		server = sinon.fakeServer.create();
		next = sinon.stub();
		store = mockStore({
			session: { currentUser: 1 },
			filter: {fromDate, toDate}
		});
		
	});

	afterEach(() => {
		server.restore();
	});

	it("Makes and API call and calls RECEIVE_SHOWS", (done) => {
		url = /api\/shows\?.*/;
		action = {
			type: FETCH_SHOWS_BY_DATE
		}
		let expectedResponse = [ { type: 'RECEIVE_SHOWS_BY_DATE', ShowsByDay: 'response' } ]
		server.respondWith("GET",url,"response");
		let promise = ShowsByDayMiddleware(store)(next)(action);
		server.respond();

		promise.done(() => {
			expect(store.getActions()).toEqual(expectedResponse);
			done();
		})

	});

	it("updates the bounds and then calls the fetch shows API", () => {
		action = { 
			type: actions.UPDATE_BOUNDS,
			bounds: "boundObj"
		};
		let expectedResponse = [
			{ type: 'FETCH_SHOWS_BY_DATE' }]

		ShowsByDayMiddleware(store)(next)(action);

		expect(store.getActions()).toEqual(expectedResponse);
		expect(next.calledWith(action)).toEqual(true);
	})
})