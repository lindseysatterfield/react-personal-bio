import React from 'react';
import Bio from './Bio';
import Contact from './Contact';
import Projects from './Projects';
import Technologies from './Technologies';

export default function Home() {
  return (
    <div className="main-container">
      <Bio />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}
