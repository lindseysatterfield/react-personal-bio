import React from 'react';
import mail from '../../assets/mail.png';
import linkedin1 from '../../assets/linkedin1.png';
import github1 from '../../assets/github1.png';
import lindsey from '../../assets/lindsey.png';

export default function Bio() {
  return (
    <div className="header-container">
      <div className="name-header-container">
        <div className="header">
          <h1 className="my-4">LINDSEY SATTERFIELD</h1>
          <h3>Software Developer</h3>
          <div id="contact-me">
            <a href="mailto:satterfield.lindsey@gmail.com"><img src={mail} className="contact-icons mail" alt="mail icon"/></a>
            <a href="https://www.linkedin.com/in/lindseysatterfield/"><img src={linkedin1} className="contact-icons linkedin" alt="linkedin icon"/></a>
            <a href="https://github.com/lindseysatterfield"><img src={github1} className="contact-icons github" alt="github icon"/></a>
          </div>
        </div>
      </div>
      <div className="profile-img-container">
        <img src={lindsey} className="lindsey-img" alt="Lindsey Memoji"/>
      </div>
    </div>
  );
}
