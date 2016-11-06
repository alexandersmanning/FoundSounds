import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ShowsByDayReducer from './shows_by_day_reducer';
import ShowReducer from './show_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
	session: SessionReducer,
	ShowsByDay: ShowsByDayReducer,
	Show: ShowReducer,
	filter: FilterReducer
});

export default RootReducer;
