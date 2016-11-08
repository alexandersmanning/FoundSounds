import { receiveCurrentUser,
         receiveErrors,
         RECEIVE_CURRENT_USER,
         LOGIN,
         LOGOUT,
         SIGNUP } from '../actions/session_actions';

import {
  receiveUserShows,
  fetchUserShows } from '../actions/user_shows_actions'

import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = error => dispatch(receiveErrors(error.responseJSON));

  switch(action.type){
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      dispatch(receiveUserShows({}))
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case RECEIVE_CURRENT_USER:
      next(action)
      dispatch(fetchUserShows(getState().session.currentUser.id, getState().filter))
    default:
      return next(action);
  }
};