import SessionMiddleware from './session_middleware';
import { applyMiddleware } from 'redux'

const RootMiddleware = applyMiddleware(SessionMiddleware);

export default RootMiddleware;