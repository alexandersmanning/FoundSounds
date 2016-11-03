import SessionMiddleware from './session_middleware';
import ShowsByDayMiddleware from './shows_by_day_middleware';
import { applyMiddleware } from 'redux'

const RootMiddleware = applyMiddleware(SessionMiddleware, ShowsByDayMiddleware);

export default RootMiddleware;