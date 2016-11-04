import SessionMiddleware from './session_middleware';
import ShowsByDayMiddleware from './shows_by_day_middleware';
import ShowMiddleware from './show_middleware'
import { applyMiddleware } from 'redux'

const RootMiddleware = applyMiddleware(SessionMiddleware, ShowsByDayMiddleware, ShowMiddleware);

export default RootMiddleware;