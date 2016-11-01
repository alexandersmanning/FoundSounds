import React from 'react';
import { Link } from 'react-router';
import UserGreetingContainer from './user_greeting/user_greeting_container';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1 className="header-logo">Found Sounds</h1></Link>
      <UserGreetingContainer />
    </header>
    {children}
  </div>
);

export default App;