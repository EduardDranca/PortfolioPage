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

    window.addEventListener("scroll", (event) => {
      var aboutMe = this.refs.aboutMe;
      var myPhoto = this.refs.myPhoto;
      var myWorkHeading = this.refs.myWorkHeading;
      var myWork = this.refs.myWork;

      var rectAboutMe = aboutMe.getBoundingClientRect();
      var rectMyPhoto = myPhoto.getBoundingClientRect();
      var rectMyWorkHeading = myWorkHeading.getBoundingClientRect();
      var rectMyWork = myWork.getBoundingClientRect();
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      
      if (!aboutMe.classList.contains("animated") && rectAboutMe.top - 40 <= viewHeight) {
        aboutMe.classList.add("animated");
        aboutMe.classList.add("fade-in-right");
      }

      if (!myPhoto.classList.contains("animated") && rectMyPhoto.top - 40 <= viewHeight) {
        myPhoto.classList.add("animated");
        myPhoto.classList.add("fade-in-left");
      }

      if (!myWorkHeading.classList.contains("animated") && rectMyWorkHeading.top - 40 <= viewHeight) {
        myWorkHeading.classList.add("animated");
        myWorkHeading.classList.add("fade-in-bottom");
      }
      
      if (!myWork.classList.contains("animated") && rectMyWork.top - 40 <= viewHeight) {
        myWork.classList.add("animated");
        myWork.classList.add("fade-in-bottom");
      }
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">

        </div>
        <div className="dark-background full-height-container">
          <div className="who-am-i">
            Hi, I am Eduard Dranca and I am a programmer.
          </div>
          <div className="full-width-container">
            <div className="show-work-button">
              View my work
            </div>
          </div>
          <div className="full-width-container bottom">
            <img id="chevron" className="centered" src="./chevron.svg"></img>
          </div>
        </div>
        <div className="full-height-container container-2cr">
          {/*schimba fotografia cu un pie chart*/}
          <div ref="myPhoto" className="center-container">
            <div className="helper">
              <div className="photo-container">
                <img id="my-photo" src="./poza_cv.png"></img>
              </div>
            </div>
          </div>
          <div ref="aboutMe" className="center-container">
            <div className="heading">
              About Me
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>

        <div className="container-2r">
          <div ref="myWorkHeading" className="full-width-container center-container heading">
            My Work
          </div>
          <div ref="myWork" id="my-work" className="container-4">
            <div class="work-container">
              <div class="overlay">
                Portfolio
              </div>
              <img class="work-image" src="./portfolio.png"></img>
            </div>
            <div class="work-container">
              <div class="overlay">
                Concerts
              </div>
            </div>
            <div class="work-container">
              <div class="overlay">
                Mario
              </div>
              <img class="work-image" src="./mario.jpg"></img>
            </div>
            <div class="work-container">
              <div class="overlay">
                Skeletal Animation
              </div>
            </div>
          </div>
        </div>

        {/* <div id="first-container" className="right-skewed z-index-100 dark-background thin-shadow class">
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
            <div className="heading-left" >Projects</div>
            <div className="projects-container">
              <div className="project thin-shadow">
                <img src="./wip.jpg" class="project-img"></img>
              </div>
              <div className="project thin-shadow">

              </div>
              <div className="project thin-shadow">

              </div>
            </div>
          </div>
        </div>
        <div id="fourth-container" className="class " style={{backgroundColor: "red"}}>
          <div className="rows-container">
            <div className="heading-right">Contact</div>
            <div className="contact-information"></div>
          </div>
        </div> */}
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