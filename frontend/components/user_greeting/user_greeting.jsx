import React from 'react';
import { Link } from 'react-router'
import SessionFormContainer from '../session_form/session_form_container'

const sessionLinks = () => (
  <nav className="login-signup">
    <button className="current" onClick={SessionFormContainer}>Login/Signup</button>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.email}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const UserGreeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default UserGreeting;
