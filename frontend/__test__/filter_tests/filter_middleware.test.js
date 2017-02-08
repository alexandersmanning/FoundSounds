import * as actions from '../../actions/filter_actions';
import ShowsByDayMiddleware from '../../middleware/shows_by_day_middleware';
import { FETCH_SHOWS_BY_DATE } from '../../actions/shows_by_day_actions';

if (process.env.NODE_ENV === 'test') {
	window.$ = require('jquery');
}

import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';

let expectedAction, expectedResponse;
let fromDate = new Date(), toDate = new Date(+fromDate + 2000);
let bounds = {"NE": "NE", "SE":"SE"};


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
		
		expectedResponse = [
			{ type: 'FETCH_SHOWS_BY_DATE' }]

		ShowsByDayMiddleware(store)(next)(action);

		expect(store.getActions()).toEqual(expectedResponse);
		expect(next.calledWith(action)).toEqual(true);
	})


	describe("add artist middleware", () => {
		it("calls next with the update filter action", () => {
			action = { 
				type: actions.ADD_ARTIST_TO_FILTER,
				artistId: 1
			};

			ShowsByDayMiddleware(store)(next)(action);
			expect(next.calledWith(action)).toEqual(true);
		});

		it("dispatches the action fetchShowsByDate", () => {
			action = { 
				type: actions.ADD_ARTIST_TO_FILTER,
				artistId: 1
			};

			expectedResponse = [{ type: 'FETCH_SHOWS_BY_DATE' }];
			ShowsByDayMiddleware(store)(next)(action);
			expect(store.getActions()).toEqual(expectedResponse);
		})
	});


	describe("remove artist middleware", () => {
		it("calls next with the update filter action", () => {
			action = { 
				type: actions.REMOVE_ARTIST_FROM_FILTER
			};

			ShowsByDayMiddleware(store)(next)(action);
			expect(next.calledWith(action)).toEqual(true);
		});

		it("dispatches the action fetchShowsByDate", () => {
			action = { 
				type: actions.REMOVE_ARTIST_FROM_FILTER
			};
			
			expectedResponse = [{ type: 'FETCH_SHOWS_BY_DATE' }];
			ShowsByDayMiddleware(store)(next)(action);
			expect(store.getActions()).toEqual(expectedResponse);
		})
	})
})