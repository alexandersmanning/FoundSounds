import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ShowsByDayReducer from './shows_by_day_reducer';

const RootReducer = combineReducers({
	session: SessionReducer,
	ShowsByDay: ShowsByDayReducer
});

export default RootReducer;
