import React from 'react';
import About from './about'

const Footer = (props) => {
	return (
		<nav className="footer-container col-1-3">
			<span className="footer-text">Found Sounds</span>
			<About/>
		</nav>
	)
}

export default Footer;