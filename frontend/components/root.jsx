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

const Root = ( {store} ) => {
	const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      //load LoginForm
    }
  };

  const _fetchShowById = (nextState, replace) => {
    let showId = nextState.params.showId;
    store.dispatch(fetchShowById(showId));
  }
  // move search container to app, and then sidebar for IndexRoute
   return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={ShowsByDayContainer}/>
          <Route path="/venues/:venueId" component={VenuesContainer}/>
          <Route path="/shows/:showId" component={ShowContainer} onEnter={_fetchShowById}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;

// <IndexRoute component={}/>