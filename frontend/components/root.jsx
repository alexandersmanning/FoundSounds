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

import { fetchShowById } from '../actions/show_actions'
import { fetchVenueById } from '../actions/venue_actions'
import { addUserToFilter, removeUserFromFilter } from '../actions/filter_actions'


const Root = ( {store} ) => {
	const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
    }
  };

  const _fetchShowById = (nextState, replace) => {
    let showId = nextState.params.showId;
    store.dispatch(fetchShowById(showId));
  }

   const _fetchVenueById = (nextState, replace) => {
    let venueId = nextState.params.venueId;
    store.dispatch(fetchVenueById(venueId, store.getState().filter ));
  }

   const _removeUserFromFilter = (nextState, replace) => {
    store.dispatch(removeUserFromFilter())
  }

  const _addUserToFilter = (nextState, replace) => {
    let userId = store.getState().session["currentUser"]["id"]
    store.dispatch(addUserToFilter(userId))
  }
  // move search container to app, and then sidebar for IndexRoute
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
                 onEnter={_addUserToFilter}/>
          <Route path="/attending/venues/:venueId" 
                 component={VenuesContainer} 
                 onEnter={_fetchVenueById}/>
          <Route path="/attending/shows/:showId" 
                 component={ShowContainer} 
                 onEnter={_fetchShowById}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;

// <IndexRoute component={}/>
 // <Route path="/attending"
 //                 component={AttendingShowContainer} />
 //          <Route path="/previous"
 //                 component={PreviousShowContainer} />