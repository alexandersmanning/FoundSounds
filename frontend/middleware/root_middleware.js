import SessionMiddleware from './session_middleware';
import ShowsByDayMiddleware from './shows_by_day_middleware';
import ShowMiddleware from './show_middleware';
import VenueMiddleware from './venue_middleware';
import UserShowsMiddleware from './user_shows_middleware';
import { applyMiddleware } from 'redux';

const RootMiddleware = applyMiddleware(SessionMiddleware, ShowsByDayMiddleware, ShowMiddleware, VenueMiddleware, UserShowsMiddleware);

export default RootMiddleware;