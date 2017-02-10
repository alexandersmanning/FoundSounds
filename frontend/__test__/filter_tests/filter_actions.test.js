import * as actions from '../../actions/filter_actions';

let expectedAction;
let fromDate = new Date(), toDate = new Date(+fromDate + 2000);
let bounds = {"NE": "NE", "SE":"SE"};

describe("Filter Update Bounds and Update Dates", () => {
	it("Sends and action for updating the bounds", () => {
		expectedAction = {type: actions.UPDATE_BOUNDS, bounds}
		expect(actions.updateBounds(bounds)).toEqual(expectedAction)
	});

	it("sends and update dates action to the filter", () => {
		expectedAction = {type: actions.UPDATE_DATES, fromDate, toDate};
		expect(actions.updateDates(fromDate, toDate)).toEqual(expectedAction);
	});
});

describe("Filter Add Artist", () => {
	let artistId = 1;
	let artistName = "Ty Segal"

	it("Creates an action to add artist without id", () => {
		expectedAction = {type: actions.ADD_ARTIST_TO_FILTER, artistId: undefined, artistName: undefined}
		expect(actions.addArtistToFilter()).toEqual(expectedAction);
	});

	it("Creates an action to add artist with id", () => {
		expectedAction = {type: actions.ADD_ARTIST_TO_FILTER, artistId, artistName}
		expect(actions.addArtistToFilter(artistId, artistName)).toEqual(expectedAction);
	})
})

describe("Filter Remove Artist", () => {
	it("Creates an action to remove the artist", () => {
		expectedAction = {type: actions.REMOVE_ARTIST_FROM_FILTER}
		expect(actions.removeArtistFromFilter()).toEqual(expectedAction);
	});
})