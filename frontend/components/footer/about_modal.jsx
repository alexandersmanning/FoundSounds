import React from 'react'
import Modal from 'react-modal'

class AboutModal extends React.Component {
	constructor(props) {
		super(props)
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = { open: false }
	};

	componentWillMount() {
    Modal.setAppElement('body');
 	}

 	openModal () { this.setState({open: true}); }

	closeModal () { this.setState({open: false}); }

	render() {
		return (<section>
					<span 
						className="about-footer"
						onClick={this.openModal}
					>
						About
					</span>
					<Modal 
						isOpen={this.state.open} 
						onRequestClose={this.closeModal}>
						<span className="close-modal" onClick={this.closeModal}>X</span>	
						<content className="about-container">
							<section className="about-section">
								<h2>About Found Sounds</h2>
								<p className="about-text">
									Found Sounds is a way of visualizing upcoming concerts in San Francisco, with the idea that users will be able to see local shows more regularly, and be able to keep track of all their upcoming concerts. </p>

									<p className="about-text">The project was inspired by PadMapper's simple interface for finding apartments, and Instagram's map visualization of where user's pictures were taken. The hope is that people will be able to view the history of their attended shows as an adventure of places they have visited.
								</p>
							</section>
							<section className="about-section">
								<h2>Alex Manning</h2>
								<p className="about-text">
									Alex is a former Industrial Engineering Manager who decided to pursue is true passion of programming and data analysis. Found Sounds was originally written as his capstone project for App Academy. He is currently looking for a Software Developer position where he can apply his programming skills to any, and all, problems that can be thrown at him.
								</p>
							</section>
							<section>
							<h2 className="contact-title">Let's work together</h2>
								<div className="link-group">
									<a className="contact-link" 
										href="http://www.alexandersmanning.com" 
										target="_blank">
										<img className="contact-image" src="https://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,w_64/v1483404603/globe-icon-7894_qsnj9j.png" alt="Portfolio"/>
									</a>
									<a className="contact-link" 
										href="https://github.com/alexandersmanning" 
										target="_blank">
										<img className="contact-image" src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1481004816/github-logo_avulo9.png" alt="Github"/>
									</a>
									<a className="contact-link" 
										href="https://angel.co/alexandersmanning" 
										target="_blank">
										<img className="contact-image" src="https://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,w_64/v1481006209/69-angellist-128_hai6eu.png" alt="Angel List"/>
									</a>
									<a className="contact-link" 
											href="https://www.linkedin.com/in/alexandersmanning/" 
											target="_blank">
											<img className="contact-image" src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1481004820/linkedin-logo_ruddep.png" alt="LinkedIn"/>
									</a>
								</div>
							</section>
						</content>
					</Modal>
				</section> )
	}
};

export default AboutModal