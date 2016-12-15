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
								<img className="user-pic" src="http://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,h_403/v1478745746/Manning_oegwmi.jpg"/>
								<p className="about-text">
									Alex is a former Industrial Engineering Manager who decided to pursue is true passion of programming and data analysis. Found Sounds was originally written as his capstone project for App Academy. He is currently looking for a Junior Developer position where he can apply his programming skills to any, and all, problems that can be thrown at him.
								</p>
							</section>
						</content>
					</Modal>
				</section> )
	}
};

export default AboutModal