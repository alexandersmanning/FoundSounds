import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../actions/show_actions';
import showReducer from '../reducers/show_reducer';
import showMiddleware from '../middleware/show_middleware';

if (process.env.NODE_ENV === 'test') {
	window.$ = require('jquery');
}

let artistList = {
		"1821":
			{"name":"Candiria","id":1821,"img_url":"http://images.sk-static.com/images/media/profile_images/artists/462306/huge_avatar"},
		"1822":
			{"name":"Westfield Massacre","id":1822,"img_url":"http://images.sk-static.com/images/media/profile_images/artists/8844184/huge_avatar"},
		"1902":
			{"name":"Mestis","id":1902,"img_url":"http://images.sk-static.com/images/media/profile_images/artists/8825339/huge_avatar"},
		"1903":
			{"name":"Name (SF)","id":1903,"img_url":"http://images.sk-static.com/images/media/profile_images/artists/5194313/huge_avatar"}
		};

let show = { 
		artists: artistList,
		billing_index: 1821,
		date: "2017-02-04T00:00:00.000Z",
		showId: 1368,
		url: "http://www.songkick.com/concerts/28819739-candiria-at-bottom-of-the-hill?utm_source=42556&utm_medium=partner",
		venueAddress: "1233 Seventeenth Street",
		venueCity: "San Francisco",
		venueId:3,
		venueName:"Bottom of the Hill",
		venueState:"CA"
		}

describe("actions", () => {
	it("receives a show", () => {
		const expectedAction = {
			type: actions.RECEIVE_SHOW,
			show
		}

		expect(actions.receiveShow(show)).toEqual(expectedAction);
	});


	it("clears a show", () => {
		expect(actions.clearShow()).toEqual({type: actions.CLEAR_SHOW})
	});

	it("fetches the show by id", () => {
		let id = 1368;
		const expectedAction = {
			type: actions.FETCH_SHOW_BY_ID,
			id
		}
		expect(actions.fetchShowById(id)).toEqual(expectedAction)
	})
});

describe("Reducers", () => {
	it("returns the null state when state is undefined", () => {
		expect(showReducer(undefined, {})).toEqual({});
	})

	it("returns the show when the RECEIVE_SHOW action is provided", () => {
		expect(showReducer(undefined, {
			type: actions.RECEIVE_SHOW, show: show
		})).toEqual(show);

		expect(showReducer(show, {})).toEqual(show)
	});

	it("clears the show", () => {
		expect(showReducer(show, { type: actions.CLEAR_SHOW })).toEqual({});
	})

});

describe("Middleware", () => {
	let server;
	let store, next, action;
	let id = 1;
	let url = `api/shows/${1}`;
	const mockStore = configureMockStore()

	beforeEach(() => {
		store = mockStore({});
		next = sinon.stub();
		action = {
			type: actions.FETCH_SHOW_BY_ID,
			id
		}
		server = sinon.fakeServer.create();
	});

	afterEach(() => {
		server.restore();
	});

	it ("calls next if the type is not part of the middleware", () => {
		action = { type: 'not-CALL_API' };
		showMiddleware(store)(next)(action);
		expect(next.calledWith(action)).toEqual(true);
	})

	it("calls server when FETCH_SHOW_BY_ID is called", (done) => {
		const expectedAction = [{type: actions.RECEIVE_SHOW, show: JSON.stringify(show)}];

		server.respondWith("GET", url, JSON.stringify(show));
		let promise = showMiddleware(store)(next)(action);
		server.respond();

		promise.done(() => { 
			expect(store.getActions().length).toEqual(1) 
			expect(store.getActions()).toEqual(expectedAction);
			done();
		})		
  })
})