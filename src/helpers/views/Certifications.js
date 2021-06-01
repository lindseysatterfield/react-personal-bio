import React from 'react';
import postman from '../../assets/postman.png';

export default function Certifications() {
  return (
    <div className="my-5 certifications-container">
      <h2 className="text-center my-3" id="certifications">certifications</h2>
      <a href="https://badgr.com/public/assertions/Lrd3unWRSvqaPIt1XgRxuQ" target="_blank" rel="noopener noreferrer" className="postman-link">
        <img src={postman} className="postman-img"/>
      </a>
    </div>
  );
}
