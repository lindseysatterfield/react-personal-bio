import React from 'react';
import mail from '../../assets/mail.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import lindsey from '../../assets/lindsey.png';

export default function Bio() {
  return (
    <div className="wrapper mb-5">
      <div className="header-container">
          <div className="name-header-container">
            <div className="header">
              <h1 className="my-4 font-weight-bold lindsey-name">LINDSEY SATTERFIELD</h1>
              <h2 id="bio">software engineer</h2>
              <h5><i className="fas fa-map-pin mr-2 mt-2"></i>Nashville, TN</h5>
              <div id="contact-me">
                <a href="mailto:satterfield.lindsey@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} className="contact-icons mail" alt="mail icon"/></a>
                <a href="https://www.linkedin.com/in/lindseysatterfield/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="contact-icons linkedin" alt="linkedin icon"/></a>
                <a href="https://github.com/lindseysatterfield" target="_blank" rel="noopener noreferrer"><img src={github} className="contact-icons github" alt="github icon"/></a>
              </div>
            </div>
          </div>
          <div className="profile-img-container">
            <img src={lindsey} className="lindsey-img" alt="Lindsey Memoji"/>
          </div>
      </div>
        <p id="about-me">
        As a long time enthusiast of all things technology, I am currently loving what I do -- developing websites and applications. A Nashville native, I am still here and currently attending Nashville Software School. Formerly a worker in video production and graduate from the University of Tennessee, I decided it was time to follow my dreams and enter the technology world to allow myself more creativity. When I am not in front of a computer, I enjoy hiking, photography, traveling, and going to Preds games.
        </p>
    </div>
  );
}
