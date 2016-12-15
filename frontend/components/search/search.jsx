import React from 'react'
import ConcertMap from '../concert_map/concert_map'
import UserGreetingContainer from '../user_greeting/user_greeting_container';
import { withRouter } from 'react-router'

const _changePath = (location, currentUser, router) => {
	if (currentUser) {
		router.push(
			{ 
				pathname: `${location}`,
				query: router.location.query})
		}
}

const Search = ({ ShowsByVenue, updateBounds, session, router, filter }) => {
	let logInModal = <div hidden/>
	 if (!session.currentUser) {
				logInModal = <div className="tab-login-button">
					<UserGreetingContainer />
				</div>
	 		}

	 	//more elegant want of finding which path
	 let path = router.location.pathname
	 let main = (path.indexOf("attending") === -1 && path.indexOf("previous") === -1 ? " selected" : "")
	 let attending = (path.indexOf("attending") > 0 ? " selected" : "")
	 let previous = (path.indexOf("previous") > 0 ? " selected" : "")

	return (
	<div className="interactive-map-container col-2-3">
		<nav className="tab-navigator">
			<ul	className="tabset">
					<li 
						className={"tab" + main}
						onClick={_changePath.bind(this, "/", session.currentUser, router)}>
						<h5>Main</h5>
					</li>
					<li className={"tab" + attending}
								onClick={_changePath.bind(this, "/attending", session.currentUser, router)}>
						<h5>Attending</h5>
						{logInModal}
					</li>
					<li className={"tab" + previous}
								onClick={_changePath.bind(this, "/previous", session.currentUser, router)}>
						<h5>Previous Shows</h5>
						{logInModal}
					</li>
				</ul>
			</nav>
		<div className="map-parent">
			<ConcertMap ShowsByVenue={ShowsByVenue} 
									updateBounds={updateBounds} 
									filter={filter}/>
		</div>
	</div>
)};


export default withRouter(Search);