import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ShowsByDayReducer from './shows_by_day_reducer';
import ShowReducer from './show_reducer';
import FilterReducer from './filter_reducer';
import VenueReducer from './venue_reducer';
import UserShowsReducer from './user_shows_reducer';
import MarkerReducer from './marker_reducer'

const RootReducer = combineReducers({
	session: SessionReducer,
	ShowsByDay: ShowsByDayReducer,
	Show: ShowReducer,
	Venue: VenueReducer,
	UserShows: UserShowsReducer,
	filter: FilterReducer,
	marker: MarkerReducer
});

export default RootReducer;
