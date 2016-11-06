import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import ShowsByDayContainer from './shows_by_day/shows_by_day_container'
import VenuesContainer from './venues/venues_container'
import ShowContainer from './show/show_container'

import { fetchShowById } from '../actions/show_actions'
import { fetchVenueById } from '../actions/venue_actions'


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
  // move search container to app, and then sidebar for IndexRoute
   return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={ShowsByDayContainer}/>
          <Route path="/venues/:venueId" 
                 component={VenuesContainer} 
                 onEnter={_fetchVenueById}/>
          <Route path="/shows/:showId" 
                 component={ShowContainer} 
                 onEnter={_fetchShowById}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;

// <IndexRoute component={}/>