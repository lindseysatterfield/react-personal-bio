import React from 'react';

export default function Technologies() {
  return (
    <div className="mb-5">
      <h2 className="text-center my-3" id="technologies">technologies</h2>
      <ul className="technologies-container">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-react fa-3x technology-links"></i></li>
        </a>
        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-js fa-3x"></i></li>
        </a>
        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-html5 fa-3x"></i></li>
        </a>
        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-css3-alt fa-3x"></i></li>
        </a>
        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-sass fa-3x"></i></li>
        </a>
        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-bootstrap fa-3x"></i></li>
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-git fa-3x"></i></li>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-github fa-3x"></i></li>
        </a>
        <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-npm fa-3x"></i></li>
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
          <li><i className="fab fa-figma fa-3x"></i></li>
        </a>
      </ul>
    </div>
  );
}
