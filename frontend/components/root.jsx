import React from 'react';
import { Provider } from 'react-redux';
import SearchContainer from './search/search_container'


// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';

const Root = ( {store} ) => {
	const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      //load LoginForm
    }
  };

   return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={SearchContainer}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;