import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserGreetingContainer from './user_greeting/user_greeting_container';
import SearchContainer from './search/search_container'
import Footer from './footer/footer'

const App = ({ children }) => (
  <div>
	   <header className="main-nav-bar">
	     <Link to="/" className="header-link">
	     		<h1 className="header-logo">Found Sounds</h1>
	     </Link>
	     <div className="main-bar-login">
	     	<UserGreetingContainer />
	     </div>
	   </header>
    {children}
    <SearchContainer />
    <Footer />
  </div>
);

export default App;