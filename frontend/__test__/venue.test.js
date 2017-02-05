import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';

import * as actions from '../actions/venue_actions';
import venueReducer from '../reducers/venue_reducer';
import venueMiddleware from '../middleware/venue_middleware';


if (process.even.NODE_ENV === 'test') {
	window.$ = require('jquery');
};


describe("Verify Actions", () => {
	it("receives venue", () => {
		expect(actions.receiveVenue({}))
	})
})