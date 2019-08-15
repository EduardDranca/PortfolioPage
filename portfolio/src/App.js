import Canvas from './Canvas.js';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvasHeight: 0,
      canvasWidth: 0
    };

    this.windowResized = this.windowResized.bind(this);
    window.addEventListener("resize", this.windowResized);
    window.addEventListener("load", this.windowResized);
  }

  windowResized(e) {
    this.setState({
      canvasHeight: this.refs.fullContainer.clientHeight,
      canvasWidth: this.refs.fullContainer.clientWidth
    })
  }

  render() {
    return (
      <div>

        <div id="first-container" className="right-skewed z-index-100 dark-background thin-shadow class">
          <div ref="fullContainer" className="full-height-container left-skewed dark-background">
            <div className="who-am-i">
              Hi, I am Eduard Dranca and I am the best programmer ever.
            </div>
            <div className="work-button-container">
              <div className="show-work-button">
                View my work
              </div>
            </div>
          </div>
        </div>
        <div id="second-container" className="left-skewed z-index-90 yellow-background thin-shadow class">
          <div className="about-me-container right-skewed yellow-background">
            <div className="profile-photo-container thin-shadow" style={{gridColumnStart: "1", gridColumnEnd: "2"}}>
              <img className="profile-photo" src="./poza_cv.png"/>
            </div>
            <div className="about-me-text-container" style={{gridColumnStart: "2"}}>
              <div className="heading-center">About me</div>
              <div className="content">
              Suntem baieti rai si de nimic n-avem teama
Saracia si dusmanii nu-i bagam in seama
Ne riscam pentru bani si ducem viata frumoasa
Suntem constienti ca nu mai venim acasa
              </div>
            </div>
          </div>
        </div>
        <div id="third-container" className="right-skewed z-index-80 thin-shadow class blue-background">
          <div className="rows-container left-skewed blue-background">
            <div className="heading-left" >My Projects</div>
          </div>
        </div>
        <div id="fourth-container" className="class " style={{backgroundColor: "red"}}>
          <div className="rows-container">
            <div className="heading-right">Contact</div>
            <div className="contact-information"></div>
          </div>
        </div>
        {/* <div className="navbar-container">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="dark-background medium-font">
            <Navbar.Brand className="big-font" href="#home">HOME</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-coll" />
            <Navbar.Collapse id="navbar-coll">
              <Nav className="ml-auto">
                <Nav.Link href="#about" className="medium-font medium-padding">ABOUT ME</Nav.Link>
                <Nav.Link href="#work" className="medium-font medium-padding">MY WORK</Nav.Link>
                <Nav.Link href="#contact" className="medium-font medium-padding">CONTACT ME</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div> */}
      </div>
    );
  }
};

export default App;