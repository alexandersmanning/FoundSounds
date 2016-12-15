import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import ShowsByDayContainer from './shows_by_day/shows_by_day_container'
import VenuesContainer from './venues/venues_container'
import ShowContainer from './show/show_container'
import AttendingShowContainer from './sidebar_navigator/attending_shows_container'
import PreviousShowContainer from './sidebar_navigator/previous_shows_container'

import { fetchShowById, clearShow } from '../actions/show_actions'
import { fetchVenueById, clearVenue } from '../actions/venue_actions'
import { addUserToFilter, removeUserFromFilter } from '../actions/filter_actions'

import { removeShowsByDay } from '../actions/shows_by_day_actions'


const Root = ( {store} ) => {
	const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace("/");
      return false;
    }
    return true
  };

  const _fetchShowById = (nextState, replace) => {
    store.dispatch(clearShow());
    let showId = nextState.params.showId;
    store.dispatch(fetchShowById(showId));
  }

   const _fetchVenueById = (nextState, replace) => {
    store.dispatch(clearVenue());
    let venueId = nextState.params.venueId;
    store.dispatch(fetchVenueById(venueId, store.getState().filter ));
  }

   const _removeUserFromFilter = (nextState, replace) => {
    store.dispatch(removeUserFromFilter());
  }

  const _clearShowList = (nextState, replace) => {
    store.dispatch(removeShowsByDay());
  }

  const _addUserToFilter = (nextState, replace) => {
     store.dispatch(removeShowsByDay());
     if (_ensureLoggedIn(nextState, replace)) {
      let userId = store.getState().session["currentUser"]["id"]
      store.dispatch(addUserToFilter(userId))
    }
  }

  const _logInVenue = (nextState, replace) => {
    if (_ensureLoggedIn(nextState, replace)) {
      _fetchVenueById(nextState, replace)
    }
  }

  const _logInShow = (nextState, replace) => {
    if (_ensureLoggedIn(nextState, replace)) {
      _fetchShowById(nextState, replace)
    }
  }
  
   return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={ShowsByDayContainer}
                    onEnter={_removeUserFromFilter}/>
          <Route path="/venues/:venueId" 
                 component={VenuesContainer} 
                 onEnter={_fetchVenueById}/>
          <Route path="/shows/:showId" 
                 component={ShowContainer} 
                 onEnter={_fetchShowById}/>
          <Route path="/attending"
                 component={AttendingShowContainer} 
                 onEnter={_addUserToFilter}
                 onLeave={_clearShowList}
                 />
          <Route path="/attending/venues/:venueId" 
                 component={VenuesContainer} 
                 onEnter={_logInVenue}/>
          <Route path="/attending/shows/:showId" 
                 component={ShowContainer} 
                 onEnter={_logInShow}/>
          <Route path="/previous"
                 component={PreviousShowContainer} 
                 onEnter={_addUserToFilter}
                 onLeave={_clearShowList}
                 />
          <Route path="/previous/venues/:venueId" 
                 component={VenuesContainer} 
                 onEnter={_logInVenue}/>
          <Route path="/previous/shows/:showId" 
                 component={ShowContainer} 
                 onEnter={_logInShow}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
