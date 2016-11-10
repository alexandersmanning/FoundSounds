import React from 'react';
import AboutModal from './about_modal';

const Footer = (props) => {
	return (
		<nav className="footer-container col-1-3">
			<span className="footer-text">Found Sounds</span>
			<AboutModal/>
		</nav>
	)
}

export default Footer;