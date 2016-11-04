import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserGreetingContainer from './user_greeting/user_greeting_container';
import SearchContainer from './search/search_container'

const App = ({ children }) => (
  <div>
	   <header className="main-nav-bar">
	     <Link to="/" className="header-link"><h1 className="header-logo">Found Sounds</h1></Link>
	     <UserGreetingContainer />
	   </header>
    {children}
    <SearchContainer />
  </div>
);

export default App;