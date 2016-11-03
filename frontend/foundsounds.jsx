import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'


//Test 
import { fetchShows } from './util/shows_by_day_api_util';
window.fetchShows = fetchShows

//


document.addEventListener("DOMContentLoaded", () => {
	let store;
	if (window.currentUser) {
		const preloadedState = { session: {currentUser: window.currentUser}};
		store = configureStore(preloadedState)
	} else {
		store = configureStore();
	}
	window.store = store;
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store}/>, root)

});