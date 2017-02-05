import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';

import * as actions from '../actions/venue_actions';
import venueReducer from '../reducers/venue_reducer';
import venueMiddleware from '../middleware/venue_middleware';


if (process.env.NODE_ENV === 'test') {
	window.$ = require('jquery');
};

let venue = {"id": 1}
let id = 1
let filter = {"filter": "options"}

describe("Verify Actions", () => {

	let expectedAction = {};
	it("receives venue", () => {
		expectedAction = {type: actions.RECEIVE_VENUE, venue}
		expect(actions.receiveVenue(venue)).toEqual(expectedAction);
	})

	it("fetches venue", () => {
		expectedAction = {type: actions.FETCH_VENUE_BY_ID, id, filter };
		expect(actions.fetchVenueById(id, filter)).toEqual(expectedAction)	
	})
})


describe("Reducer Actions", () => {
	it("returns the nullstate with unrelated action", () => {
		expect(venueReducer(undefined, {type: 'FAKE_ACTION'})).toEqual({});
	});

	it("returns the new venue object with receive action", () => {
		let newAction = {type: actions.RECEIVE_VENUE, venue}
		expect(venueReducer({"id": 2}, newAction)).toEqual(venue)
	})

	it("return the null state upon clearing the venue", () => {
		expect(venueReducer(venue, {type: actions.CLEAR_VENUE})).toEqual({});
	})
});


describe("Venue Middleware", () => {
	let mockStore = configureMockStore();
	let server, store, next, action;
	let id = 1;
	let filter = {"optionOne": 1, "optionTwo": 2}
	let url = `api/venues/${id}?optionOne=1&optionTwo=2`


	beforeEach(() => {
		store = mockStore({});
		next = sinon.stub();
		action = {
			type: actions.FETCH_VENUE_BY_ID,
			id,
			filter
		};

		server = sinon.fakeServer.create();
	})

	afterEach(() => {
		server.restore();
	})


	it ("calls next if the type is not part of the middleware", () => {
		action = {type: "not-CALL-API"};
		venueMiddleware(store)(next)(action);
		expect(next.calledWith(action)).toEqual(true);
	})

	it("calls API with receive id based on parameters", (done) => {
		const expectedAction = [{
			type: actions.RECEIVE_VENUE, 
			venue: JSON.stringify(venue)
		}];

		server.respondWith("GET", url, JSON.stringify(venue));
		let promise = venueMiddleware(store)(next)(action);
		server.respond();

		promise.done(() => {
			expect(store.getActions().length).toEqual(1);
			expect(store.getActions()).toEqual(expectedAction);
			done();
		})
	})
})