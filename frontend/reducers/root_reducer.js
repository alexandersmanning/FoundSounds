import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ShowsByDayReducer from './shows_by_day_reducer';
import ShowReducer from './show_reducer';

const RootReducer = combineReducers({
	session: SessionReducer,
	ShowsByDay: ShowsByDayReducer,
	Show: ShowReducer
});

export default RootReducer;
