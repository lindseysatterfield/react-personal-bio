import React from 'react';
import mail from '../../assets/mail.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

export default function Contact() {
  return (
      <div className="contact-container my-3" id="contact">
        <h1 className="my-3">contact me</h1>
        <div id="contact-me">
          <a href="mailto:satterfield.lindsey@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} className="contact-icons mail" alt="mail icon"/></a>
          <a href="https://www.linkedin.com/in/lindseysatterfield/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="contact-icons linkedin" alt="linkedin icon"/></a>
          <a href="https://github.com/lindseysatterfield" target="_blank" rel="noopener noreferrer"><img src={github} className="contact-icons github" alt="github icon" id="icon"/></a>
        </div>
      </div>
  );
}
